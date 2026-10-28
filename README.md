# PDG Support Docs

Internal calculators, reference tools, and working documents for the Peake Design team, published as a static site on Vercel at **https://pdgdocs.peakos.ca**.

**Homepage:** `index.html` — links to every page in the site.

## Adding a new page

1. Add a standalone `.html` file to the repo root (it should be a complete document with its own `<!DOCTYPE html>`, `<head>`, and `<body>` — not a fragment).
2. Add a card for it to `index.html` under the most relevant section (or add a new section).
3. Commit and push — Vercel redeploys automatically.

## Hosting on Vercel

There is no build step. If the Vercel project needs to be set up again:

1. **Add New → Project**, import this GitHub repo.
2. Framework Preset: **Other**. Leave the Build Command empty and the Output Directory at the repo root.
3. **Settings → Domains**: add `pdgdocs.peakos.ca` and create the DNS record Vercel shows (a CNAME to `cname.vercel-dns.com`, or the value Vercel displays).
