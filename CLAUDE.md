# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev        # Start dev server at localhost:4321
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build

# Astro CLI
npx astro check    # TypeScript type-checking (must pass with 0 errors before committing)
```

There is no test suite. Always run `npx astro check` before committing — it must exit with 0 errors, 0 warnings, 0 hints.

## Architecture

This is an **Astro 3** personal portfolio/resume site for Ivan Arias (hcoco1), deployed at `https://www.hcoco1.com/`. It uses static site generation with the following integrations: MDX, Tailwind CSS + DaisyUI, React (for interactive components), and sitemap.

### Site structure

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Home — shows 3 latest portfolio + blog entries |
| `/cv` | `src/pages/cv.astro` | Inline HTML resume (no content collection) |
| `/blog/` | `src/pages/blog/[...page].astro` | Paginated blog listing |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` | Individual blog post |
| `/blog/tag/[tag]` | `src/pages/blog/tag/[tag]/[...page].astro` | Tag-filtered blog listing |
| `/portfolio` | `src/pages/portfolio/[...page].astro` | Paginated portfolio listing |
| `/portfolio/[slug]` | `src/pages/portfolio/[slug].astro` | Individual project detail |
| `/contact` | `src/pages/contact.astro` | Contact page with Web3Forms form |
| `/rss.xml` | `src/pages/rss.xml.js` | RSS feed (`GET` handler, Astro 3 convention) |

Navigation items are controlled in [src/components/SideBarMenu.astro](src/components/SideBarMenu.astro) — pages can be hidden by commenting out `<li>` entries there.

### Content collections

Content lives in `src/content/` and is typed via `src/content/config.ts`:

- **`blog`** — Markdown/MDX files with frontmatter: `title`, `description`, `pubDate` (required), `heroImage`, `badge`, `tags` (optional)
- **`portfolio`** — Markdown/MDX files with frontmatter: `title`, `description`, `custom_link_label`, `updatedDate` (required), `custom_link`, `category`, `repository`, `repository_label`, `badge`, `checkoutUrl`, `heroImage` (optional)

Note: `tags` and `details` are **not** part of the portfolio schema — do not pass them to portfolio components.

### Layout hierarchy

`BaseLayout.astro` is the root shell — it wraps all pages with the sidebar drawer, header, footer, Google Analytics, and DaisyUI theme switcher. `PostLayout.astro` and `StoreItemLayout.astro` extend `BaseLayout` for blog posts and portfolio items respectively.

The sidebar is a DaisyUI drawer (`lg:drawer-open` for desktop, hamburger on mobile). Active nav item highlighting uses `sideBarActiveItemID` prop passed from each page down through `BaseLayout → SideBar → SideBarMenu`.

### Scripting conventions

- Use `<script>` (no attributes) for scripts that need npm imports — Astro/Vite processes these and resolves packages.
- Use `<script is:inline>` only for scripts that must run as literal HTML (e.g., the theme FOART prevention snippet, GA boilerplate). `is:inline` scripts cannot use npm imports.
- `<script type="module">` and `<script async src=...>` are treated as inline by Astro — avoid using `type="module"` when you need Vite processing.
- When adding pagination pages, always declare a typed `Props` interface using `Page<CollectionEntry<"collection">>` from `astro` and `astro:content`.
- API route handlers must use uppercase method names: `export async function GET(...)`, not `get`.
- Type-only imports must use `import type { ... }` — `verbatimModuleSyntax` is enforced.

### Styling

Tailwind CSS + DaisyUI. Available themes are configured in [tailwind.config.cjs](tailwind.config.cjs). The default theme is `retro` (set via `localStorage` in `BaseLayout.astro` to prevent FOUC). Users can switch themes via the `<select data-choose-theme>` on the home page.

DaisyUI handles theming via `data-theme` attribute — prefer DaisyUI semantic classes (`bg-base-100`, `text-base-content`) over hardcoded `dark:` Tailwind variants. If you do use `dark:` prefixes, note that `text-black-800`, `dark:bg-white-900`, etc. are **not** valid Tailwind class names.

Global styles are in [src/styles/global.css](src/styles/global.css).

### Google Analytics

The GA tracking ID (`G-DT72EQSLX6`) is hardcoded in `BaseLayout.astro` using `is:inline` scripts. The `.env.local` variable `PUBLIC_TRACKING_ID` is present but not wired into the layout — if you need to vary the ID per environment, use `is:inline define:vars={{ TRACKING_ID }}`.

### Environment variables

`.env.local` is required for local development:
```
PUBLIC_TRACKING_ID="G-DT72EQSLX6"
```
Variables prefixed `PUBLIC_` are exposed to the browser.

### YAML plugin

`@rollup/plugin-yaml` is loaded in `astro.config.mjs`, enabling `import` of `.yaml`/`.yml` files in Astro/JS/TS files.

### Package manager

This project uses **pnpm** (see `.npmrc` and `pnpm-lock.yaml`). Do not use `npm install` — use `pnpm install`.
