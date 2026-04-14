# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio and blog site for Gwansik Kim (gwansik.dev). Built with Next.js 16 App Router, Velite for MDX content, and Tailwind CSS v4.

## Commands

```bash
pnpm dev              # Dev server on port 1362 (runs velite first)
pnpm build            # Production build (velite + next build)
pnpm build:velite     # Rebuild content only
pnpm lint             # ESLint
pnpm typecheck        # TypeScript check (tsc --noEmit --skipLibCheck)
pnpm knip             # Detect unused files/dependencies
```

## Architecture

### Content Pipeline

MDX posts live in `content/posts/{slug}/index.mdx` with frontmatter (title, date, slug). Velite compiles them at build time into `.velite/`, accessible via `#content` path alias. All posts are statically generated via `generateStaticParams()`.

### Key Path Aliases

- `~/*` → `./src/*`
- `#content` → `./.velite` (Velite-generated content)

### Routing

- `src/app/(article)/posts/` — blog listing and `[slug]` detail pages
- `src/app/(article)/talks/` — speaking engagements
- `src/app/feed.xml/route.ts` — RSS feed route handler

### Data Layer

`src/utils/data-access-layer.ts` centralizes all data access (getPosts, getTalks, getSponsors). Posts come from Velite; talks and sponsors are hardcoded.

### Styling

Tailwind CSS v4 with CSS custom properties for theming (light/dark via `prefers-color-scheme`). Class composition uses `cn()` from `src/utils/cn.ts` (clsx wrapper). Prettier auto-sorts Tailwind classes.

### Client Components

Almost everything is a Server Component. Only `src/components/provider.tsx` uses `'use client'` (wraps PostHog, Vercel Analytics, Speed Insights).

### MDX Rendering

`src/components/(article)/mdx-content.tsx` evaluates compiled Velite code at runtime via `useMDXComponent()`. Custom MDX component mappings are in `src/components/(article)/mdx-components.tsx` — images are async with blur placeholders.

### Fonts

Uses local Pretendard Variable font (Korean/English) loaded from `src/app/fonts/`.
