import test from 'node:test';
import assert from 'node:assert/strict';
import { handle, readEnv, safeNext, type AuthEnv } from '../middleware.ts';

const TENANT = '11111111-2222-3333-4444-555555555555';
const env: AuthEnv = {
  tenant: TENANT,
  clientId: 'client-id',
  clientSecret: 'client-secret',
  secret: 'x'.repeat(40),
  baseUrl: 'https://pdgdocs.peakos.ca',
};
const ORIGIN = 'https://pdgdocs.peakos.ca';

const req = (path: string, cookies = '') =>
  new Request(ORIGIN + path, { headers: cookies ? { cookie: cookies } : {} });

const setCookies = (res: Response) => res.headers.getSetCookie();
const cookieValue = (res: Response, name: string) =>
  setCookies(res).find((c) => c.startsWith(name + '='))?.split(';')[0].slice(name.length + 1);

const jwt = (claims: object) => `h.${Buffer.from(JSON.stringify(claims)).toString('base64url')}.s`;
const goodClaims = (nonce: string) => ({
  aud: env.clientId,
  iss: `https://login.microsoftonline.com/${TENANT}/v2.0`,
  tid: TENANT,
  nonce,
  exp: Math.floor(Date.now() / 1000) + 3600,
  oid: 'user-oid',
  name: 'Jane Staff',
  preferred_username: 'jane@peakedesign.ca',
});

/** Run /auth/login and return the flow cookie, state and nonce Microsoft would echo back. */
async function startLogin(next = '/training/') {
  const res = await handle(req('/auth/login?next=' + encodeURIComponent(next)), env);
  const loc = new URL(res.headers.get('location')!);
  return {
    res,
    loc,
    flowCookie: cookieValue(res, 'pdg_auth')!,
    state: loc.searchParams.get('state')!,
    nonce: loc.searchParams.get('nonce')!,
  };
}

function mockTokenEndpoint(claimsFor: (nonce: string) => object, ok = true) {
  const original = globalThis.fetch;
  const calls: { url: string; body: URLSearchParams }[] = [];
  globalThis.fetch = (async (url: string, init: RequestInit) => {
    calls.push({ url, body: init.body as URLSearchParams });
    return ok
      ? new Response(JSON.stringify({ id_token: jwt(claimsFor(nonceHolder.nonce)) }), { status: 200 })
      : new Response('{}', { status: 400 });
  }) as typeof fetch;
  return { calls, restore: () => (globalThis.fetch = original) };
}
const nonceHolder = { nonce: '' };

async function signIn(claims?: (nonce: string) => object) {
  const login = await startLogin();
  nonceHolder.nonce = login.nonce;
  const mock = mockTokenEndpoint(claims ?? goodClaims);
  try {
    const res = await handle(
      req(`/auth/callback?code=abc&state=${login.state}`, `pdg_auth=${login.flowCookie}`),
      env,
    );
    return { res, mock, login };
  } finally {
    mock.restore();
  }
}

test('missing env fails closed with 500', async () => {
  const res = await handle(req('/'), null);
  assert.equal(res.status, 500);
});

test('readEnv requires all vars and a 32+ char secret', () => {
  const ok = { AUTH_TENANT_ID: 'T', AUTH_CLIENT_ID: 'c', AUTH_CLIENT_SECRET: 's', AUTH_SECRET: 'y'.repeat(32) };
  assert.ok(readEnv(ok));
  assert.equal(readEnv({ ...ok, AUTH_SECRET: 'short' }), null);
  assert.equal(readEnv({ ...ok, AUTH_CLIENT_ID: undefined }), null);
  assert.equal(readEnv({ ...ok, AUTH_BASE_URL: 'https://x.test/' })!.baseUrl, 'https://x.test');
});

test('unauthenticated request redirects to login and preserves the path', async () => {
  const res = await handle(req('/building-code/slope/?a=1'), env);
  assert.equal(res.status, 302);
  assert.equal(res.headers.get('location'), '/auth/login?next=' + encodeURIComponent('/building-code/slope/?a=1'));
});

test('login redirects to the tenant authorize endpoint with PKCE and sets a flow cookie', async () => {
  const { res, loc, flowCookie } = await startLogin();
  assert.equal(res.status, 302);
  assert.equal(loc.origin + loc.pathname, `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/authorize`);
  assert.equal(loc.searchParams.get('client_id'), env.clientId);
  assert.equal(loc.searchParams.get('redirect_uri'), `${ORIGIN}/auth/callback`);
  assert.equal(loc.searchParams.get('code_challenge_method'), 'S256');
  assert.ok(loc.searchParams.get('code_challenge'));
  assert.ok(flowCookie);
  const raw = setCookies(res)[0];
  assert.match(raw, /HttpOnly/);
  assert.match(raw, /SameSite=Lax/);
  assert.match(raw, /Secure/);
});

test('happy path: callback sets a session cookie, clears the flow cookie, redirects to next', async () => {
  const { res, mock } = await signIn();
  assert.equal(res.status, 302);
  assert.equal(res.headers.get('location'), '/training/');
  assert.ok(cookieValue(res, 'pdg_session'));
  assert.match(setCookies(res).find((c) => c.startsWith('pdg_auth='))!, /Max-Age=0/);
  assert.equal(mock.calls.length, 1);
  assert.equal(mock.calls[0].body.get('client_secret'), env.clientSecret);
  assert.ok(mock.calls[0].body.get('code_verifier'));
});

test('a valid session passes through to the site and /auth/me returns the user', async () => {
  const { res } = await signIn();
  const session = `pdg_session=${cookieValue(res, 'pdg_session')}`;

  const through = await handle(req('/land-use/', session), env);
  assert.equal(through.headers.get('x-middleware-next'), '1');

  const me = await handle(req('/auth/me', session), env);
  assert.deepEqual(await me.json(), { name: 'Jane Staff', email: 'jane@peakedesign.ca' });
});

test('a tampered or garbage session cookie is rejected', async () => {
  const { res } = await signIn();
  const good = cookieValue(res, 'pdg_session')!;
  const [body] = good.split('.');
  for (const bad of [`${body}.AAAA`, good.slice(0, -2) + 'xx', 'garbage', '']) {
    const r = await handle(req('/', `pdg_session=${bad}`), env);
    assert.equal(r.status, 302, bad);
    assert.match(r.headers.get('location')!, /^\/auth\/login/);
  }
});

test('a session signed with a different secret is rejected', async () => {
  const { res } = await signIn();
  const other = { ...env, secret: 'z'.repeat(40) };
  const r = await handle(req('/', `pdg_session=${cookieValue(res, 'pdg_session')}`), other);
  assert.equal(r.status, 302);
});

test('/auth/me is 401 without a session', async () => {
  assert.equal((await handle(req('/auth/me'), env)).status, 401);
});

test('callback rejects a wrong state', async () => {
  const login = await startLogin();
  const res = await handle(req('/auth/callback?code=abc&state=wrong', `pdg_auth=${login.flowCookie}`), env);
  assert.equal(res.status, 400);
  assert.equal(cookieValue(res, 'pdg_session'), undefined);
});

test('callback rejects a missing flow cookie', async () => {
  const res = await handle(req('/auth/callback?code=abc&state=whatever'), env);
  assert.equal(res.status, 400);
});

test('callback surfaces a Microsoft error without setting a session', async () => {
  const res = await handle(req('/auth/callback?error=access_denied&error_description=<b>nope</b>'), env);
  assert.equal(res.status, 400);
  const html = await res.text();
  assert.ok(!html.includes('<b>nope</b>'), 'error text must be HTML-escaped');
  assert.ok(html.includes('&lt;b&gt;nope&lt;/b&gt;'));
});

for (const [label, patch] of Object.entries({
  'wrong tenant': { tid: '99999999-9999-9999-9999-999999999999' },
  'wrong audience': { aud: 'someone-else' },
  'wrong issuer': { iss: 'https://login.microsoftonline.com/other/v2.0' },
  'expired token': { exp: 1 },
  'wrong nonce': { nonce: 'replayed' },
})) {
  test(`callback denies ${label}`, async () => {
    const { res } = await signIn((n) => ({ ...goodClaims(n), ...patch }));
    assert.equal(res.status, 403);
    assert.equal(cookieValue(res, 'pdg_session'), undefined);
  });
}

test('callback fails safely when the token endpoint rejects the code', async () => {
  const login = await startLogin();
  const mock = mockTokenEndpoint(goodClaims, false);
  try {
    const res = await handle(req(`/auth/callback?code=abc&state=${login.state}`, `pdg_auth=${login.flowCookie}`), env);
    assert.equal(res.status, 502);
    assert.equal(cookieValue(res, 'pdg_session'), undefined);
  } finally {
    mock.restore();
  }
});

test('logout clears the session cookie', async () => {
  const res = await handle(req('/auth/logout'), env);
  assert.equal(res.status, 200);
  assert.match(setCookies(res).find((c) => c.startsWith('pdg_session='))!, /Max-Age=0/);
});

test('safeNext blocks open redirects', () => {
  assert.equal(safeNext('/training/?x=1'), '/training/?x=1');
  for (const bad of ['//evil.com', '/\\evil.com', 'https://evil.com', 'evil', '/auth/login', null, '']) {
    assert.equal(safeNext(bad as string | null), '/', String(bad));
  }
});

test('login with a hostile next parameter falls back to /', async () => {
  const { flowCookie } = await startLogin('//evil.com');
  const body = JSON.parse(Buffer.from(flowCookie.split('.')[0], 'base64url').toString());
  assert.equal(body.next, '/');
});

test('when AUTH_BASE_URL is unset the redirect URI uses the request origin', async () => {
  const res = await handle(req('/auth/login'), { ...env, baseUrl: undefined });
  assert.equal(new URL(res.headers.get('location')!).searchParams.get('redirect_uri'), `${ORIGIN}/auth/callback`);
});
