# PHM Explained — Project Guide

## Overview

Unofficial fan guide to Andy Weir's *Project Hail Mary*. Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS. Static export.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production (outputs to out/)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Code Conventions

### Pages (App Router)
- Pages are **server components** by default — no `'use client'` unless interactivity is required
- Every page exports `metadata` using `buildMetadata()` from `@/lib/metadata`
- Internal links use Next.js `<Link>` — never `<a>` for same-site navigation
- External links use `<a>` with `target="_blank" rel="noopener"`

### Metadata
- Use `buildMetadata({ title, description, path, ogImage?, ogType? })` for per-page metadata
- Structured data goes in `<StructuredData>` components (breadcrumbs + article JSON-LD)
- `articleJsonLd` helper takes `{ headline, description, publishedDate, image, path }`

### Styling
- Tailwind utility classes only — no custom CSS files
- Use the space-themed color palette from `tailwind.config.ts`:
  - `bg-[#0a0e17]` — page background
  - `bg-[#0d1321]` — card/section background
  - `bg-[#060912]` — page header background
  - `border-[#1e2d50]` — borders
  - `text-[#e2e8f0]` — headings
  - `text-[#94a3b8]` — body text
  - `text-[#3b82f6]` — accent links
- Typography: body is `font-sans` (Inter), headings use `font-display` (Space Grotesk)
- CSS component classes are defined in `globals.css` via `@layer components`:
  - `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
  - `.card`, `.tag` (`.tag-blue`, `.tag-amber`, `.tag-purple`)
  - `.info-box` (`.info-box.blue`, `.info-box.amber`)
  - `.hud-panel`, `.hud-grid`, `.hud-item`
  - `.mission-panel`, `.mission-panel-header`, `.mission-panel-body`
  - `.bridge-card`, `.bridge-fiction`, `.bridge-reality`
  - `.era-timeline`, `.era-node`
  - `.toc`, `.toc-title`, `.toc-list`
  - `.timeline-track`, `.timeline-event`, `.event-era`, `.event-time`
  - `.content` — article typography (h2, h3, p, ul, a, tables)
  - `.section`, `.section-sm`, `.section-dark`
  - `.grid-2`, `.grid-3`, `.grid-4`
  - `.official-links`, `.official-link`

### Interactive Components
- Client components go in `src/components/` and use `'use client'`
- Interactive components: `Header.tsx` (nav + mobile menu), `HeroStars.tsx`, `BackToTop.tsx`, `EnergyCalculator.tsx`, `RockySimulator.tsx`, `TimelineFilterClient.tsx`, `MissionPanel.tsx`
- `HeroStars` generates animated star fields for page headers
- Filter/timeline functionality lives in `TimelineFilterClient.tsx` — state management via `useState`

### Import Aliases
- `@/` maps to `src/`
- Example: `import Header from '@/components/Header'`

## Page List

| Route | File | Type |
|---|---|---|
| `/` | `page.tsx` | Home (hero, cards, external links) |
| `/about` | `about/page.tsx` | About the site |
| `/affiliate-disclosure` | `affiliate-disclosure/page.tsx` | Legal |
| `/artemis-ii` | `artemis-ii/page.tsx` | Content (Artemis II mission) |
| `/book-vs-movie` | `book-vs-movie/page.tsx` | Content (adaptation comparison) |
| `/characters` | `characters/page.tsx` | Content (character profiles) |
| `/contact` | `contact/page.tsx` | Contact page |
| `/copyright-notice` | `copyright-notice/page.tsx` | Legal |
| `/could-this-exist` | `could-this-exist/page.tsx` | Content (science analysis) |
| `/dmca-policy` | `dmca-policy/page.tsx` | Legal |
| `/fan-theories` | `fan-theories/page.tsx` | Content (fan theories) |
| `/fiction-vs-reality` | `fiction-vs-reality/page.tsx` | Content (comparison) |
| `/nasa-tech` | `nasa-tech/page.tsx` | Content (NASA technology) |
| `/needoh` | `needoh/page.tsx` | Content (fan culture) |
| `/privacy-policy` | `privacy-policy/page.tsx` | Legal |
| `/project-hail-mary-ending-explained` | `project-hail-mary-ending-explained/page.tsx` | Content (ending analysis) |
| `/project-hail-mary-timeline` | `project-hail-mary-timeline/page.tsx` | Content (timeline + filter) |
| `/real-space-missions` | `real-space-missions/page.tsx` | Content (space missions hub) |
| `/science` | `science/page.tsx` | Content (science + calculators) |
| `/space-missions-timeline` | `space-missions-timeline/page.tsx` | Content (space era timeline) |
| `/terms-of-use` | `terms-of-use/page.tsx` | Legal |

## Key Points

- This is a **static site** — `next.config.js` has `output: 'export'`
- Images are **unoptimized** (`images.unoptimized: true`) for static export compatibility
- Google AdSense script is in the root `layout.tsx`
- The site uses `trailingSlash: true` in next.config.js
- All page content is original commentary — no copyrighted book text
- Original HTML files in the project root are the legacy version; `src/` is the new Next.js codebase
