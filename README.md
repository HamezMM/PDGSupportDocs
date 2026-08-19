# PDG Support Docs

Internal calculators, reference tools, and working documents for the Peake Design team, published as a static site via GitHub Pages.

**Homepage:** `index.html` — links to every page in the site.

## Adding a new page

1. Add a standalone `.html` file to the repo root (it should be a complete document with its own `<!DOCTYPE html>`, `<head>`, and `<body>` — not a fragment).
2. Add a card for it to `index.html` under the most relevant section (or add a new section).
3. Commit and push — GitHub Pages redeploys automatically.

## Enabling GitHub Pages

If Pages isn't already enabled for this repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, then pick the `main` branch and `/ (root)` folder.
