# CLUBEMKT | Automation & Intelligence Boutique

An automation architect replacing manual, repetitive business tasks with intelligent workflows.

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Run tests:

```sh
npm test
```

## Deployment

This project is deployed on Cloudflare Pages under the project `clubemkt-labs`.

### Deploy to Cloudflare Pages

1. Build the project:
```sh
npm run build
```

2. Deploy using Wrangler CLI:
```sh
npx wrangler pages deploy dist --project-name=clubemkt-labs
```

Or connect your repository to Cloudflare Pages with these settings:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: 18 or higher

### Environment Variables

No environment variables are required for the base deployment.

## Project Structure

```
src/
├── components/     # React components
├── hooks/          # Custom React hooks
├── i18n/           # Internationalization
├── lib/            # Utility functions
├── pages/          # Page components
└── test/           # Test files
```
