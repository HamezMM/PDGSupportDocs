/**
 * Vercel Routing Middleware — Microsoft Entra ID (M365) sign-in for the whole site.
 *
 * Runs before every request, including the static files in public/, so every
 * page requires a valid session cookie. Implements the OIDC authorization-code
 * flow with PKCE against a single-tenant Entra app registration:
 *
 *   /auth/login     start sign-in (redirects to Microsoft)
 *   /auth/callback  exchange the code, check tenant, set the session cookie
 *   /auth/logout    clear the session cookie
 *   /auth/me        JSON {name,email} for the signed-in user (used by the nav)
 *
 * Required env vars: AUTH_TENANT_ID, AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, AUTH_SECRET.
 * Optional: AUTH_BASE_URL (e.g. https://pdgdocs.peakos.ca — pins the redirect URI).
 * If the required vars are missing the site fails closed (500), never open.
 * See docs/AUTH_SETUP.md.
 */
import { next } from '@vercel/functions';

declare const process: { env: Record<string, string | undefined> };

export const config = { matcher: '/:path*' };

const SESSION_COOKIE = 'pdg_session';
const FLOW_COOKIE = 'pdg_auth';
const SESSION_TTL = 8 * 60 * 60; // seconds; staff re-check against Entra every 8h
const FLOW_TTL = 10 * 60;

export interface AuthEnv {
  tenant: string;
  clientId: string;
  clientSecret: string;
  secret: string;
  baseUrl?: string;
}

export function readEnv(source: Record<string, string | undefined> = process.env): AuthEnv | null {
  const { AUTH_TENANT_ID, AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, AUTH_SECRET, AUTH_BASE_URL } = source;
  if (!AUTH_TENANT_ID || !AUTH_CLIENT_ID || !AUTH_CLIENT_SECRET || !AUTH_SECRET || AUTH_SECRET.length < 32) {
    return null;
  }
  return {
    tenant: AUTH_TENANT_ID.toLowerCase(),
    clientId: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
    secret: AUTH_SECRET,
    baseUrl: AUTH_BASE_URL?.replace(/\/+$/, ''),
  };
}

export default function middleware(request: Request): Promise<Response> {
  return handle(request, readEnv());
}

// ---------------------------------------------------------------- helpers

const enc = new TextEncoder();
const dec = new TextDecoder();
const now = () => Math.floor(Date.now() / 1000);

function b64u(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function unb64u(str: string): Uint8Array<ArrayBuffer> {
  const pad = '='.repeat((4 - (str.length % 4)) % 4);
  const bin = atob(str.replace(/-/g, '+').replace(/_/g, '/') + pad);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

const randomToken = (bytes = 32) => b64u(crypto.getRandomValues(new Uint8Array(bytes)));

const hmacKey = (secret: string, usage: KeyUsage) =>
  crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [usage]);

async function sign(payload: object, secret: string): Promise<string> {
  const body = b64u(enc.encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(secret, 'sign'), enc.encode(body));
  return `${body}.${b64u(new Uint8Array(sig))}`;
}

async function verify<T extends { exp: number }>(token: string | undefined, secret: string): Promise<T | null> {
  if (!token) return null;
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;
  try {
    const ok = await crypto.subtle.verify('HMAC', await hmacKey(secret, 'verify'), unb64u(sig), enc.encode(body));
    if (!ok) return null;
    const payload = JSON.parse(dec.decode(unb64u(body))) as T;
    return typeof payload.exp === 'number' && payload.exp > now() ? payload : null;
  } catch {
    return null;
  }
}

function readCookie(request: Request, name: string): string | undefined {
  for (const part of (request.headers.get('cookie') ?? '').split(';')) {
    const i = part.indexOf('=');
    if (i > 0 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
  }
  return undefined;
}

function cookie(name: string, value: string, maxAge: number, secure: boolean): string {
  return `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure ? '; Secure' : ''}`;
}

/** Only allow same-site relative paths (blocks //evil.com, /\evil.com, absolute URLs). */
export function safeNext(value: string | null): string {
  if (!value || !value.startsWith('/')) return '/';
  try {
    const u = new URL(value, 'http://local');
    if (u.origin !== 'http://local' || u.pathname.startsWith('/auth/')) return '/';
    return u.pathname + u.search;
  } catch {
    return '/';
  }
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function page(status: number, title: string, message: string, linkHref = '/auth/login', linkText = 'Sign in'): Response {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)} — PDG Support Docs</title><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f4f0;color:#1a1a18;display:grid;place-items:center;min-height:100vh;margin:0;padding:1.5rem}main{background:#fff;border:.5px solid rgba(0,0,0,.12);border-radius:12px;padding:2rem;max-width:440px}h1{font-size:18px;margin:0 0 .5rem}p{font-size:14px;line-height:1.55;color:#6b6b67;margin:0 0 1.25rem}a{display:inline-block;background:#185fa5;color:#fff;text-decoration:none;font-size:13px;font-weight:600;border-radius:8px;padding:8px 14px}@media(prefers-color-scheme:dark){body{background:#1c1c1a;color:#e8e8e2}main{background:#242422;border-color:rgba(255,255,255,.1)}p{color:#9b9b95}a{background:#85b7eb;color:#042c53}}</style></head><body><main><h1>${escapeHtml(title)}</h1><p>${escapeHtml(message)}</p><a href="${escapeHtml(linkHref)}">${escapeHtml(linkText)}</a></main></body></html>`;
  return new Response(html, { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

function redirect(location: string, cookies: string[] = []): Response {
  const headers = new Headers({ location, 'cache-control': 'no-store' });
  for (const c of cookies) headers.append('set-cookie', c);
  return new Response(null, { status: 302, headers });
}

// ---------------------------------------------------------------- handler

interface Session { sub: string; name: string; email: string; exp: number }
interface Flow { state: string; nonce: string; verifier: string; next: string; exp: number }

export async function handle(request: Request, env: AuthEnv | null): Promise<Response> {
  if (!env) {
    return page(500, 'Sign-in is not configured', 'The site is locked until authentication is set up. Contact the site administrator.', '/', 'Home');
  }

  const url = new URL(request.url);
  const secure = url.protocol === 'https:';
  const base = env.baseUrl ?? url.origin;
  const redirectUri = `${base}/auth/callback`;

  switch (url.pathname) {
    case '/auth/login': {
      const flow: Flow = {
        state: randomToken(16),
        nonce: randomToken(16),
        verifier: randomToken(32),
        next: safeNext(url.searchParams.get('next')),
        exp: now() + FLOW_TTL,
      };
      const challenge = b64u(new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode(flow.verifier))));
      const auth = new URL(`https://login.microsoftonline.com/${env.tenant}/oauth2/v2.0/authorize`);
      auth.search = new URLSearchParams({
        client_id: env.clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        response_mode: 'query',
        scope: 'openid profile email',
        state: flow.state,
        nonce: flow.nonce,
        code_challenge: challenge,
        code_challenge_method: 'S256',
      }).toString();
      return redirect(auth.toString(), [cookie(FLOW_COOKIE, await sign(flow, env.secret), FLOW_TTL, secure)]);
    }

    case '/auth/callback':
      return callback(request, url, env, redirectUri, secure);

    case '/auth/logout': {
      const res = page(200, 'Signed out', 'You have been signed out of PDG Support Docs.');
      res.headers.append('set-cookie', cookie(SESSION_COOKIE, '', 0, secure));
      return res;
    }

    case '/auth/me': {
      const session = await verify<Session>(readCookie(request, SESSION_COOKIE), env.secret);
      if (!session) return new Response(null, { status: 401, headers: { 'cache-control': 'no-store' } });
      return new Response(JSON.stringify({ name: session.name, email: session.email }), {
        headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
      });
    }
  }

  if (await verify<Session>(readCookie(request, SESSION_COOKIE), env.secret)) {
    return next();
  }
  return redirect(`/auth/login?next=${encodeURIComponent(url.pathname + url.search)}`);
}

async function callback(request: Request, url: URL, env: AuthEnv, redirectUri: string, secure: boolean): Promise<Response> {
  const clearFlow = cookie(FLOW_COOKIE, '', 0, secure);
  const fail = (status: number, title: string, message: string) => {
    const res = page(status, title, message);
    res.headers.append('set-cookie', clearFlow);
    return res;
  };

  const oauthError = url.searchParams.get('error');
  if (oauthError) {
    return fail(400, 'Sign-in failed', `Microsoft returned: ${url.searchParams.get('error_description') ?? oauthError}`);
  }

  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const flow = await verify<Flow>(readCookie(request, FLOW_COOKIE), env.secret);
  if (!code || !state || !flow || flow.state !== state) {
    return fail(400, 'Sign-in expired', 'The sign-in attempt could not be verified. Please try again.');
  }

  let idToken: string | undefined;
  try {
    const res = await fetch(`https://login.microsoftonline.com/${env.tenant}/oauth2/v2.0/token`, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: env.clientId,
        client_secret: env.clientSecret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: flow.verifier,
      }),
    });
    if (!res.ok) return fail(502, 'Sign-in failed', 'Microsoft rejected the sign-in request. Please try again.');
    idToken = ((await res.json()) as { id_token?: string }).id_token;
  } catch {
    return fail(502, 'Sign-in failed', 'Could not reach Microsoft. Please try again.');
  }

  // The token came straight from Microsoft's token endpoint over TLS to a
  // confidential client, so signature verification is not required (OIDC Core §3.1.3.7).
  let claims: Record<string, unknown>;
  try {
    claims = JSON.parse(dec.decode(unb64u(idToken!.split('.')[1])));
  } catch {
    return fail(502, 'Sign-in failed', 'Microsoft returned an unreadable token.');
  }

  const valid =
    claims.aud === env.clientId &&
    claims.iss === `https://login.microsoftonline.com/${env.tenant}/v2.0` &&
    String(claims.tid ?? '').toLowerCase() === env.tenant &&
    claims.nonce === flow.nonce &&
    typeof claims.exp === 'number' &&
    claims.exp > now();
  if (!valid) {
    return fail(403, 'Access denied', 'Your account is not permitted to use this site. Sign in with your Peake Design account.');
  }

  const session: Session = {
    sub: String(claims.oid ?? claims.sub ?? ''),
    name: String(claims.name ?? ''),
    email: String(claims.preferred_username ?? claims.email ?? ''),
    exp: now() + SESSION_TTL,
  };
  return redirect(flow.next, [clearFlow, cookie(SESSION_COOKIE, await sign(session, env.secret), SESSION_TTL, secure)]);
}
