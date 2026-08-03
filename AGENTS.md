# AGENTS.md

````md
# AGENTS.md

## Project

This repository contains Jonatha's personal portfolio website.

Stack:

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- ESLint
- npm
- Vercel

The project is bilingual:

- pt-BR
- en

The primary goal is to showcase:

- Visual Design
- Instructional Design
- Web Development
- AI-powered solutions
- Professional profile and portfolio

---

# General Principles

- Read only the files required for the current task.
- Never scan the entire repository unless absolutely necessary.
- Make the smallest coherent change possible.
- Never refactor unrelated code.
- Never rewrite files unnecessarily.
- Preserve the project's architecture and conventions.
- Prefer clarity over cleverness.
- Do not introduce abstractions prematurely.
- Keep responses concise.

---

# Token Optimization

To minimize token usage:

- Read only directly related files.
- Avoid reopening files that have not changed.
- Do not generate long implementation plans.
- Do not summarize obvious code.
- Do not explain standard React or Next.js concepts unless requested.
- Avoid verbose progress updates.
- Avoid repeating the user's request.
- Never generate documentation unless explicitly requested.
- Never generate changelogs automatically.
- Never generate TODO files.
- Never generate roadmap files.
- Never generate architecture documents unless requested.

---

# Package Manager

Always use npm.

Commands:

```bash
npm run dev
npm run lint
npm run build
```
````

Do not use:

- pnpm
- yarn
- bun

unless explicitly requested.

---

# Validation Policy

Run the minimum validation necessary.

## Default validation

For most changes:

```bash
npm run lint
```

Do not automatically run:

```bash
npm run build
```

---

## Only run build when

Run:

```bash
npm run build
```

ONLY if one of these is true:

- user explicitly requested it
- next.config changed
- package.json changed
- dependencies changed
- middleware changed
- routing changed
- layouts changed
- metadata changed
- deployment configuration changed
- environment variable usage changed
- server/client component boundaries changed
- preparing for deployment

Otherwise:

**Do not build.**

---

## Development Server

Do NOT run:

```bash
npm run dev
```

unless:

- runtime verification is required
- visual verification is required
- user explicitly requests it

Never leave development servers running.

---

# Tests

Do NOT create tests unless explicitly requested.

Do NOT create:

- snapshot tests
- visual tests
- integration tests
- unit tests

for trivial UI or content changes.

Run only tests directly related to the modified code.

---

# Dependencies

Do not install packages unless necessary.

Before adding a dependency ask yourself:

- Can Next.js already do this?
- Can React already do this?
- Can CSS already do this?
- Can Tailwind already do this?
- Can TypeScript already do this?

If yes:

Do NOT install another package.

---

# Next.js Guidelines

Use:

- App Router
- Server Components by default
- TypeScript
- Metadata API
- next/link
- next/image

Only use `"use client"` when required.

Avoid:

- unnecessary API routes
- unnecessary middleware
- unnecessary server actions
- unnecessary client components
- unnecessary dynamic rendering

Prefer static rendering whenever possible.

---

# TypeScript

- strict mode
- avoid any
- avoid type assertions
- explicit props
- explicit interfaces when beneficial
- readable types over clever types

Never suppress TypeScript errors without reason.

---

# React

- Functional components
- Small components
- Composition over inheritance
- Avoid unnecessary state
- Avoid unnecessary useEffect
- Avoid premature memoization

---

# Tailwind

Prefer utility classes.

Keep layouts:

- mobile first
- responsive
- accessible

Avoid:

- arbitrary values without reason
- duplicated utility groups
- unnecessary wrappers

Extract reusable UI only when duplication appears.

---

# Accessibility

Always preserve:

- semantic HTML
- heading hierarchy
- keyboard navigation
- visible focus
- labels
- alt text
- sufficient color contrast

---

# Performance

Prefer:

- Server Components
- Static Rendering
- Lazy loading
- Next Image
- Next Font

Avoid:

- large dependencies
- unnecessary JavaScript
- unnecessary animations
- unnecessary client rendering

---

# Visual Direction

The design language should be:

- premium
- editorial
- modern
- technological
- minimal
- elegant
- clean
- human

Avoid:

- generic SaaS look
- excessive gradients
- glassmorphism everywhere
- floating cards everywhere
- decorative clutter

---

# Internationalization

Languages:

- pt-BR
- en

Rules:

- Never mix languages.
- Keep translations natural.
- Keep localization consistent.
- Do not duplicate translated content.
- Don't forget accentuation in pt-BR

---

# Repository Safety

Never:

- edit .env unless requested
- expose secrets
- expose API keys
- commit build artifacts
- commit .vercel
- force push
- rewrite git history

Do not create commits unless explicitly requested.

---

# Completion Format

At the end of every task, respond with only:

### Changed

- concise summary

### Validation

- commands actually executed

### Notes

- only if something remains unresolved

Keep completion summaries under 8 lines whenever possible.

```

```
