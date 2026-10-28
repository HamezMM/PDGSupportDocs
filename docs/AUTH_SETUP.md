# Microsoft 365 (Entra ID) sign-in — setup

The whole site, including the static calculators and checklists, sits behind Microsoft sign-in.
It is enforced by `middleware.ts` at the repo root (Vercel Routing Middleware), which runs before
every request. It uses the OIDC authorization-code flow with PKCE against a **single-tenant**
Entra app registration and issues an HttpOnly, signed session cookie valid for 8 hours.

**Until the environment variables below are set, the site returns a 500 "Sign-in is not configured"
page. It fails closed, never open.** Set them before merging/deploying.

## 1. Register the app in Entra

Needs an Entra role that can register apps (Application Administrator or higher).

1. Entra admin center → **Identity → Applications → App registrations → New registration**.
2. Name: `PDG Support Docs`. Supported account types: **Accounts in this organizational directory only (single tenant)**.
3. Redirect URI: platform **Web**, value `https://pdgdocs.peakos.ca/auth/callback`.
4. After creating it, copy **Application (client) ID** and **Directory (tenant) ID** from the Overview page.
5. **Certificates & secrets → New client secret.** Copy the **Value** immediately (it is shown once).
   Secrets expire (24 months max) — add a calendar reminder to rotate it.
6. **API permissions:** the default `Microsoft Graph → User.Read` (delegated) is enough. If your tenant blocks
   user consent, click **Grant admin consent**.

## 2. Restrict who can sign in

A single-tenant app already blocks other organisations, but **every user in your tenant (including guests)
could still sign in**. To limit it:

1. Entra admin center → **Enterprise applications → PDG Support Docs → Properties**.
2. Set **Assignment required?** to **Yes** and save.
3. **Users and groups → Add user/group** and assign your staff group (group assignment needs Entra ID P1,
   included in Microsoft 365 Business Premium; otherwise assign users individually).

Unassigned users are then refused by Microsoft before they ever reach the site.

## 3. Add environment variables in Vercel

Project → **Settings → Environment Variables** (Production, and Preview if you want previews gated too).

| Name | Value |
|---|---|
| `AUTH_TENANT_ID` | Directory (tenant) ID |
| `AUTH_CLIENT_ID` | Application (client) ID |
| `AUTH_CLIENT_SECRET` | The client secret **Value** |
| `AUTH_SECRET` | Random string, 32+ chars, signs session cookies: `openssl rand -base64 48` |
| `AUTH_BASE_URL` | `https://pdgdocs.peakos.ca` (pins the redirect URI) |

## 4. Deploy and verify

1. Deploy. Visit `https://pdgdocs.peakos.ca/` in a private window: you should be sent to Microsoft sign-in.
2. After signing in you land back on the page you asked for, and the nav shows your name and **Sign out**.
3. Check that a direct static URL such as `/building-code/slope/` and the old URL `/nbc-classifier.html`
   also require sign-in.
4. Test with a user who is **not** assigned to the app: Microsoft should refuse them.

**Preview deployments:** they run on different hostnames that aren't registered as redirect URIs, so
sign-in will stop at a Microsoft redirect-mismatch error (`AADSTS50011`). That still proves the gate works
(an unauthenticated visit is redirected to sign in). To sign in on a preview, add that preview's
`https://<host>/auth/callback` as an extra redirect URI and set `AUTH_BASE_URL` for the Preview environment
accordingly.

**Rollback:** Vercel → Deployments → promote the previous deployment (instant).

## Behaviour and limits

- Sessions last 8 hours, then the user is silently re-checked against Entra. Removing someone from the
  app assignment stops new sign-ins immediately; an existing session lasts until it expires.
- **Sign out** clears the site's cookie only; the user's Microsoft session remains.
- This protects the website only. **Scribe guide links stay open to anyone who has the URL**, and if the
  GitHub repository is public its contents are readable there.
- Rotate `AUTH_SECRET` to sign everyone out at once (update the env var and redeploy).

## Local checks

```bash
npm test      # unit tests for the auth flow (no network, no Microsoft account needed)
```

`astro dev` does not run Vercel middleware, so the site is open locally. Use `vercel dev` with the env
vars set to exercise the full flow end to end.
