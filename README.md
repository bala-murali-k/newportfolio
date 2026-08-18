# Portfolio - Base Scaffold v2 (unstyled)

Frontend-only React + Vite + TypeScript app. No CSS/visual styling is
applied yet - this scaffold proves out the restructured architecture
before design work begins.

All application code lives under `src/`. Path aliases (`@pages`,
`@content`, etc) point inside `src/` - see Path aliases below.

## Folder responsibilities

| Folder | Responsibility |
|---|---|
| `src/pages/` | Route entry points. One folder per route, `index.tsx` mounts that page's core component. Thin - no logic lives here. |
| `src/content/` | Data displayed on screen. Mirrors `pages/` 1:1, and each page's content itself mirrors the styles folder structure - see Per-style content below. Plus `content/common/` for cross-page data (nav links, etc), which stays style-agnostic. |
| `src/component/` | Reusable pieces, and the **junction** where content + theme + style + layout come together as actual HTML. `component/common/` holds pieces shared by every page (Header, Footer, Button, switchers). Page-scoped folders mirror `pages/` and follow the core + swappable-children pattern (see below). |
| `src/context/` | Shared state. `context/global/style-context.tsx` holds the single source of truth for active style/theme. Page-scoped context folders are added only when a page genuinely needs local shared state. |
| `src/layout/` | Structural placement only - where slots (header/footer/sidebar) go. `core.layout.tsx` at the top level is the resolver every caller imports; each style has its own `core.layout.tsx` implementation plus its own `slot.tsx` primitive (not shared - see Layout responsibilities below). |
| `src/theme/` | Colors and backgrounds only. One folder per style id, `light.ts` / `dark.ts`. |
| `src/styles/` | Everything else visual - typography, spacing. One folder per style id. Also holds `config.ts` per style (id, name, themes, `followsSlotSystem`), the shared `types.ts` (`StyleConfig` interface, not owned by any one style), and `index.ts`, the aggregator that lists every registered style. Layout is no longer referenced here - see Layout responsibilities below. |

Two styles are registered: `modern` (the initial/default style on load) and `minimal`.

## Per-style content

Each page's content folder mirrors the same per-style structure as
`styles/`, `theme/`, and `layout/` - so a style can have genuinely
different copy, not just different visuals:

```
content/about/
  about.content.ts             <- bare fallback, used if a style has no content of its own
  modern/
    about.modern.content.ts    <- content written specifically for the "modern" style
  minimal/
    about.minimal.content.ts   <- content written specifically for the "minimal" style
  index.ts                     <- getAboutContent(styleId) resolver
```

`core.about.tsx` reads the active style from context and asks the
resolver for that style's content:

```tsx
const { styleId } = useStyle();
const content = getAboutContent(styleId);
```

If a third style (say `retro`) doesn't have `content/about/retro/about.retro.content.ts`
yet, `getAboutContent('retro')` falls back to the bare content in
`about.content.ts` until that style's own content is written. This
pattern is applied to `home`, `projects`, `about`, and `contact`. The
resolution logic itself lives once in `content/resolveContent.ts` so
each page's `index.ts` stays a few lines.

## The core + swappable-children pattern

Every page-scoped component folder follows this shape:

```
component/home/
  core.home.tsx       <- stable, mounted by pages/home. Never changes casually.
  hero/
    hero.v1.tsx
    index.ts           <- export { default } from './hero.v1'
  intro/
    intro.v1.tsx
    index.ts
```

`core.home.tsx` imports `Hero` and `Intro` from their folder (not the
versioned file directly). To rapidly iterate on one piece without
touching anything else: drop in `hero.v2.tsx`, flip the one line in
`hero/index.ts` to point at it. The core file, the page, and every
other component are untouched.

## Context-based wiring, not prop-drilling

Cross-cutting concerns (active style, active theme) are read directly
from `context/global/style-context.tsx` via `useStyle()` wherever
needed (e.g. `ThemeSwitcher`, `App`) rather than threaded down as
props. Component-specific data (page content, form values) is still
passed as props - context is reserved for state that's genuinely
global, to avoid it becoming a dumping ground.

## Style, layout, and theme are keyed by style id

```
styles/modern/config.ts       <- id, name, themes, followsSlotSystem for "modern"
styles/modern/typography.css
styles/modern/spacing.css
styles/minimal/config.ts      <- same, for "minimal"
styles/minimal/typography.css
styles/minimal/spacing.css
theme/modern/light.ts
theme/modern/dark.ts
theme/minimal/light.ts
theme/minimal/dark.ts
layout/modern/core.layout.tsx
layout/modern/slot.tsx
layout/minimal/core.layout.tsx
layout/minimal/slot.tsx
layout/core.layout.tsx         <- resolver, mounts the active style's layout
styles/types.ts                <- shared StyleConfig interface
styles/index.ts                <- registry/manifest of all styles
```

Adding a third style means creating a parallel `styles/<id>/`,
`theme/<id>/`, `layout/<id>/` set and registering it in
`styles/index.ts` - nothing else changes.

## Path aliases

`@`, `@pages`, `@content`, `@component`, `@context`, `@styles`,
`@theme`, `@layout` all resolve to their matching folder under
`src/` (see `tsconfig.json` and `vite.config.ts` - keep both in
sync).

## Layout responsibilities

A layout owns:

1. **Arrangement** - how content is positioned (grid/flex structure).
2. **Feel** - the scroll axis and whether scrolling is enabled at all
   (vertical, horizontal, or none).
3. **Dimensions** - how the layout adapts to device size (responsive
   breakpoints live here, not as separate swapped layout components -
   that's the deferred v2 sub-layout idea). Desktop-only for now;
   mobile is deferred.
4. **Slot arrangement** - where header/sidebar/footer/content sit.

### The layout resolver

`layout/core.layout.tsx` is the **only** layout file anything outside
`layout/` imports (`App.tsx` does `import Layout from '@layout/core.layout'`).
It mirrors the core + swappable-children pattern used by page
components: it reads the active style from context itself and mounts
that style's own layout internally, keyed in a small registry:

```
layout/
  core.layout.tsx        <- resolver. Reads useStyle(), mounts the right layout.
  modern/
    core.layout.tsx       <- modern's actual layout implementation
    slot.tsx               <- modern's own Slot primitive
  minimal/
    core.layout.tsx
    slot.tsx
    core.layout.module.css
```

Callers never branch on style themselves - `Layout` just resolves
correctly. Style config (`styles/<id>/config.ts`) no longer holds a
`layout` reference either; layout selection is entirely `layout/`'s
responsibility now, not something a style config points to.

**Slot is not shared.** Each layout has its own `slot.tsx` - even
though `modern/slot.tsx` and `minimal/slot.tsx` are identical today,
they're independent files by design, so one style's layout can
diverge from another's without a shared dependency between them.

### Minimal layout

Header, sidebar, and footer are fixed chrome - they never move.
Only the main content region scrolls, sideways: vertical mouse-wheel
input over the content is redirected into horizontal scroll
(`layout/minimal/core.layout.tsx` listens for `wheel` and drives
`scrollLeft` directly) - the page itself never scrolls vertically.
Desktop-only for now; `core.layout.module.css` holds the grid and
scroll-axis rules.

Modern's layout is untouched by this - it still uses normal vertical
page scroll and doesn't render a sidebar (`App.tsx` only supplies
sidebar slot content when `minimal` is active).

## Theme colors are live CSS variables

`context/global/style-context.tsx` writes every key in the active
theme's `colors` object onto `<html>` as `--color-<key>` whenever the
style or theme changes - generically, not hardcoded per key. CSS
(e.g. `core.layout.module.css`) consumes them with `var(--color-background)`,
`var(--color-foreground)`, etc. Adding a new token to a theme (e.g.
`accent`) makes `var(--color-accent)` available immediately, no other
wiring required.

## Running

```
npm install
npm run dev
```

## Open items / v2 roadmap

1. Apply real typography/spacing CSS and theme colors to both the
   `modern` and `minimal` styles.
2. Validate this structure in practice, then decide on sub-layouts /
   layout variants for responsive conditions.
3. Add a third style to further stress-test the registry pattern.
4. Add backend + database when the blog feature starts - only
   `content/` and the affected core components change.
