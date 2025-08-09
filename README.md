# Compiled React + Pure HTML on GitHub Pages

This template deploys **only compiled files** to GitHub Pages via a GitHub Action.
Your React source lives in `calendar-src/` and is NOT included in the deployed site.

## What you get
- Root: pure HTML + CSS with a 3-way theme switch (Auto/Light/Dark) — no JS.
- `calendar-src/`: Vite + React + TypeScript source code.
- GitHub Action that:
  1. Builds the React app (`vite build`) with `base: '/calendar/'`.
  2. Copies root HTML files into `public/`.
  3. Places the compiled app into `public/calendar/`.
  4. Publishes **only** `public/` to GitHub Pages.

## How to use
1. Create a new GitHub repo and push these files.
2. In **Settings → Pages**, set **Source: GitHub Actions**.
3. Push to `main` — the Action will build and deploy.
4. Open your site:
   - `https://USERNAME.github.io/` (root HTML)
   - `https://USERNAME.github.io/calendar/` (compiled React app)

## Local dev
```bash
cd calendar-src
npm install
npm run dev  # opens Vite dev server
```
When ready to deploy, push to `main`; the Action handles the rest.

## Notes
- The root pages link to the compiled app at `/calendar/`.
- If you add more React apps, repeat the pattern (e.g. `notes-src/` → build to `/notes/` in `public/`).

Slán agus códing sona! 🌿
