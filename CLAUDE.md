# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio and blog site for Gwansik Kim (gwansik.dev). Built with Next.js 16 App Router, TanStack Markdown for content, and Tailwind CSS v4.

## Commands

```bash
pnpm dev              # Dev server on port 1362 (copies post assets first)
pnpm build            # Production build (copies post assets first)
pnpm lint             # ESLint (flat config; currently blocked by typescript-eslint lacking TS 7 support)
pnpm typecheck        # TypeScript check (tsc --noEmit --skipLibCheck)
pnpm knip             # Detect unused files/dependencies
```

## Architecture

### Content Pipeline

Markdown posts live in `content/posts/{slug}/index.md` with frontmatter (title, date, slug). `src/utils/posts.ts` reads them from disk at build time and parses them into a `MarkdownDocument` AST with `@tanstack/markdown`. Relative image paths (`./assets/*`) are rewritten to `/static/posts/{slug}/assets/*`, where `scripts/copy-assets.mjs` copies them before `dev` and `build`. All posts are statically generated via `generateStaticParams()`.

### Key Path Aliases

- `~/*` → `./src/*`

### Routing

- `src/app/(article)/posts/` — blog listing and `[slug]` detail pages
- `src/app/(article)/talks/` — speaking engagements
- `src/app/feed.xml/route.ts` — RSS feed route handler

### Data Layer

`src/utils/data-access-layer.ts` centralizes all data access (getPosts, getTalks, getSponsors). Posts come from `src/utils/posts.ts`; talks and sponsors are hardcoded.

### Styling

Tailwind CSS v4 with CSS custom properties for theming (light/dark via `prefers-color-scheme`). Class composition uses `cn()` from `src/utils/cn.ts` (clsx wrapper). Prettier auto-sorts Tailwind classes.

### Client Components

Almost everything is a Server Component. Only `src/components/provider.tsx` uses `'use client'` (wraps PostHog, Vercel Analytics, Speed Insights).

### Markdown Rendering

`src/components/(article)/markdown-content.tsx` renders the parsed AST with the `Markdown` React adapter from `@tanstack/markdown/react`. Tag-to-component mappings are in `src/components/(article)/markdown-components.tsx` — images are async with blur placeholders. Code blocks are highlighted with `@tanstack/highlight` (`src/utils/highlighter.ts`), which also emits the light/dark theme CSS variables.

Fence info strings support `{2, 6-7}` (highlight lines), `title="..."` and `collapse={21-42}`. Collapsing is implemented as a TanStack Markdown extension in `src/utils/markdown-extensions.ts`: it rewrites the code block into a `collapsible-code` component node, rendered by `src/components/(article)/collapsible-code.tsx` as a `<details>` group inside the highlighted `<pre>`. The extension also provides an HTML fallback for the RSS feed.

### Fonts

Uses local Pretendard Variable font (Korean/English) loaded from `src/app/fonts/`.
