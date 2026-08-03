# Jonatha Portfolio 2026

Personal portfolio website for Jonatha Teixeira, built to present work across Instructional Design, Visual Design, and Digital Products.

The site is bilingual, with English as the default language and Brazilian Portuguese available under `/pt-br`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm
- Vercel

## Main Routes

- `/` — Home
- `/work` — Project index
- `/work/[slug]` — Project case studies
- `/expertise` — Areas of expertise
- `/instructional-design`
- `/visual-design`
- `/digital-products`
- `/about`
- `/contact`
- `/pt-br` — Portuguese version

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The development script starts Next.js and opens the local server URL in the browser.

## Validation

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Project Content

Portfolio content is structured in typed TypeScript data:

- `src/lib/content.ts` — shared site copy, navigation, pages, and localization
- `src/lib/projects.ts` — real portfolio projects and case study content

Project media slots are prepared for real assets under `public/images/projects`, but the current implementation can render without those files.

## Notes

- Do not add dependencies unless they are clearly necessary.
- Keep English as the default language.
- Keep Brazilian Portuguese routes under `/pt-br`.
- Do not publish unconfirmed metrics, clients, responsibilities, or results.
