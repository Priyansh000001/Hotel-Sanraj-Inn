# Netlify Deployment Notes

This repository is currently a **Vite + TanStack Start** frontend (not Next.js App Router).

## Static deployment setup
- Build command: `npm run build:netlify`
- Publish directory: `dist/client`
- SPA routes are handled by Netlify redirect to `/index.html`.

## Added files/config
- `netlify.toml` with:
  - build command + publish dir
  - SPA rewrite rules
  - caching headers
  - baseline security headers
- `.gitignore` includes `.netlify/`
- `package.json` scripts:
  - `build:netlify`
  - `netlify:dev`
  - `check`

## Local pre-deploy check
```bash
npm ci
npm run check
```

## Deploy
- Connect repo to Netlify
- Build command: `npm run build:netlify`
- Publish directory: `dist/client`

