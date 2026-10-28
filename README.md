# PDG Support Docs

Internal training guides, calculators, reference tools, and working documents for the Peake Design team, built with [Astro](https://astro.build) and hosted on Vercel at **https://pdgdocs.peakos.ca**.

## Sections

| Section | URL | Contents |
|---|---|---|
| Training | `/training/` | All Scribe workflow guides (cards open the Scribe viewer) |
| Land Use Tools | `/land-use/` | Tenancy checker, 63 Calgary LUB 1P2007 district checklists, link to the City's bylaw page |
| Building Code Tools | `/building-code/` | NBC calculators and slope calculator |
| Revit Support | `/revit/` | PDG Revit Tools reference |
| Project Support | `/project-support/` | Fee proposal and Calgary permit fee calculators |
| Internal Tools | `/internal/` | Revit Add-in Academy, LISP routines, Playwright automations, folder restructure proposal |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Layout

- `src/pages/` — Astro pages (home, section indexes, Training, checklist index)
- `src/layouts/`, `src/components/` — shared nav, footer, cards
- `src/data/sections.ts` — section headings and the tool cards on each section page
- `src/data/guides.json` — Scribe guide metadata (title, URL, tags) for the Training page
- `src/data/checklists.json` — district checklist index
- `public/<section>/<tool>/index.html` — standalone tools and checklists, served as-is
- `vercel.json` — redirects from the old flat URLs (e.g. `/nbc-classifier.html`) to the new paths
- `docs/` — non-published working notes

## Adding things

- **A Scribe guide:** add an entry to `src/data/guides.json`.
- **A standalone tool/page:** put a complete `.html` document at `public/<section>/<slug>/index.html` (link back to `/`), then add a card in `src/data/sections.ts`.
- **A new section:** add it to `sections` in `src/data/sections.ts` (and a page under `src/pages/` if it needs more than cards).

## Hosting on Vercel

1. **Add New → Project**, import this GitHub repo.
2. Framework Preset: **Astro** (Build Command `astro build`, Output Directory `dist`).
3. **Settings → Domains**: `pdgdocs.peakos.ca` (CNAME to `cname.vercel-dns.com`, or the value Vercel displays).

If the existing project was created with Framework Preset **Other** and the repo root as the output directory, change it to Astro before merging this branch, or the deploy will serve the wrong folder.

## Auth

The whole site requires Microsoft 365 (Entra ID) sign-in, enforced by the root `middleware.ts`
(Vercel Routing Middleware, which also covers the static files in `public/`). The site returns a 500
until the `AUTH_*` environment variables are set. Setup steps, rollout and limits are in
[`docs/AUTH_SETUP.md`](docs/AUTH_SETUP.md); run the tests with `npm test`.
