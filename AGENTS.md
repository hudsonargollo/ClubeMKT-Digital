# ClubeMKT-Digital (clubemkt-labs)

Automation & Intelligence Boutique.

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Test: `npm test`
- Build: `npm run build`
- Deploy: `npx wrangler pages deploy dist --project-name=clubemkt-labs`

## Project Architecture

- **Static Homepage**: `static/homepage.html` (rebranded Three.js experience).
- **React App**: `src/` (Classic React dashboard, available at `/classic`).
- **Build System**: `scripts/build-site.mjs` orchestrates merging the static homepage and the React build into the final `dist/` folder.

## Deployment Target

- Cloudflare Pages: `clubemkt-labs`
- Production domain: `clubemkt.digital`
