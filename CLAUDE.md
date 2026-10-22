# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Makkah UI — an Arabic-first, RTL-aware shadcn-compatible UI registry and its documentation site. Built on **TanStack Start** (React 19 RSC) + **Vite+** (the `vp` CLI), deployed to **Cloudflare** via Wrangler. Most of the product surface is *generated* from MDX metadata, registry items, and route files rather than hand-written pages — treat it as a content/registry pipeline, not a traditional backend.

## Commands

Package manager is **pnpm**; the lint/test/build toolchain is the **Vite+ `vp` CLI** (configured in `vite.config.ts`, not ESLint/Vitest configs).

| Task | Command |
| --- | --- |
| Install | `pnpm install` |
| Dev server | `pnpm dev` (`vp dev`) |
| Production build | `pnpm build` (`vp build`) |
| Run built app | `pnpm start` |
| Full test suite | `pnpm test` |
| Single test file | `vp test run src/path/to/file.test.ts` |
| Lint/type-check one file | `vp check path/to/file.tsx` |
| Lint + auto-fix one file | `vp check --fix path/to/file.tsx` |
| Deploy (Cloudflare) | `pnpm deploy` (`pnpm build && wrangler deploy`) |
| Registry doctor | `bun --bun ./scripts/doctor.ts` |
| Scaffold registry item | `bun --bun ./scripts/new.ts --type <type> --name <kebab-name> --description "<desc>"` |

Notes:
- `vp check` runs a combined oxc/eslint/typescript/react/import/unicorn/vitest/jsx-a11y pass with type-aware linting. Prefer it over raw `tsc`/`eslint`.
- `vp build` is the real validation step when routes, docs, or registry JSON change — it regenerates `src/routeTree.gen.ts` and runs prerendering/sitemap.
- The `registry:new` and `registry:doctor` tasks are also wired as `vp run` tasks, but `new.ts` has TTY issues under `vp run` — call the `scripts/new.ts` directly as shown.

## Architecture

**Two component trees, kept strictly separate:**
- `registry/items/**` — the *published* registry content (the actual shipped library). Organized by type (`ui/`, `blocks/`, `hooks/`, etc.). Each item pairs `_registry.mdx` (metadata + docs) with sibling `_preview*.tsx` files. Bilingual previews (`_preview-ar.tsx` / `_preview-en.tsx`) are a normal pattern here.
- `src/components/ui/**` — docs-app-shell shadcn primitives only. **Never** put published registry source here.

**Content pipeline** (`content-collections.ts` → `src/lib/registry/` + `src/lib/docs/`):
MDX from `registry/items/**/_registry.mdx`, `registry/items/**/_preview*.tsx`, and `registry/docs/**/*.{md,mdx}` is compiled into content collections at build time, then assembled into the registry catalog (`src/lib/registry/catalog.ts`) and emitted as JSON (`src/lib/registry/json.server.ts`). MDX compilation is also wired at the Vite level (`createMdx` in `vite.config.ts`), so style/content/markdown changes usually need a build to validate, not just unit tests.

**Routing** (`src/routes/`, TanStack file-based):
- Site/docs pages: `index.tsx`, `docs.*.tsx`, `$section.*.tsx` (section = `components`/`blocks`/`utilities`).
- Generated outputs served as routes: `registry[.]json.ts` and `r/` serve the registry index (`/registry.json`, `/r/registry.json`) and per-item JSON (`/r/<name>.json`); `*[.]md.ts`, `llms[.]txt.ts`, `robots[.]txt.ts` serve plain-text/markdown variants.
- `src/routeTree.gen.ts` is generated — **never edit by hand**; it updates on `vp build`.

**Config sources of truth:**
- `registry/config.ts` — public copy, registry name/namespace, homepage, repo URL.
- `src/lib/site-config.ts` — registry URL helpers and route-path policy.
- `src/lib/seo.ts` + route `head` metadata — page metadata, sitemap inclusion (`shouldExcludeFromSitemap`), and prerender page discovery (`src/lib/prerender-pages.ts`).

**Docs chrome:** `src/components/docs/` (header, footer, nav, search, theme, MDX rendering). Theme/CSS: `src/styles.css`.

## Conventions

- `components.json` sets `rtl: true`, `tsx`, `rsc`, Tabler icons, `base-maia` style, `mist` base color. Keep RTL/Arabic-first behavior intact; bilingual examples are expected.
- Aliases: `@/components`, `@/lib`, `@/components/ui`, `@/lib/utils`, `@/hooks`.
- `bare import "zod"` is aliased to **zod v3** in `vite.config.ts` (shadcn schema needs it); use `zod/v4` explicitly where v4 is intended (as `content-collections.ts` does).
- Authored docs are flat MD/MDX in `registry/docs/` with optional `title`/`description`/`order`/`group` frontmatter; nested docs pages are not supported yet.
- After registry edits: `vp check --fix` the touched files, then `bun --bun ./scripts/doctor.ts`. Before handoff when routes/docs/registry JSON/source loading changed: `vp build`.

## Task-specific skills

When working in these areas, load the linked skill file into context:
- Pages in `src/routes` / navigation → `node_modules/@tanstack/router-core/skills/router-core/SKILL.md`
- Route loaders / pending / errors / route data fetching → `node_modules/@tanstack/router-core/skills/router-core/data-loading/SKILL.md`
- Server functions (forms, mutations, server-only logic) → `node_modules/@tanstack/start-client-core/skills/start-core/server-functions/SKILL.md`
- API endpoints / server route handlers → `node_modules/@tanstack/start-client-core/skills/start-core/server-routes/SKILL.md`
- Changing TanStack Start / Vite / Devtools setup → `node_modules/@tanstack/start-client-core/skills/start-core/SKILL.md`
- Registry item authoring/adaptation → `skills/shadcn-registry/SKILL.md`
