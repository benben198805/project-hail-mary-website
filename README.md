# PHM Explained

An unofficial fan-created educational guide to **Project Hail Mary** by Andy Weir. This site provides detailed analysis of the book's timeline, characters, scientific concepts, and connections to real-world space exploration.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static export (`next export`)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

The static output will be in the `out/` directory, ready for deployment to any static hosting provider.

## Project Structure

```
src/
├── app/                        # App Router pages
│   ├── layout.tsx              # Root layout (fonts, header, footer)
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Dynamic XML sitemap
│   ├── robots.ts               # Dynamic robots.txt
│   ├── globals.css             # Global styles + Tailwind component classes
│   ├── about/
│   ├── artemis-ii/
│   ├── book-vs-movie/
│   ├── characters/
│   ├── contact/
│   ├── could-this-exist/
│   ├── fan-theories/
│   ├── fiction-vs-reality/
│   ├── nasa-tech/
│   ├── needoh/
│   ├── privacy-policy/
│   ├── project-hail-mary-ending-explained/
│   ├── project-hail-mary-timeline/
│   ├── real-space-missions/
│   ├── science/
│   ├── space-missions-timeline/
│   └── ... (legal pages)
├── components/                 # Reusable React components
│   ├── Header.tsx              # Navigation with mobile menu
│   ├── Footer.tsx              # Site footer
│   ├── HeroStars.tsx           # Animated star field
│   ├── BackToTop.tsx           # Scroll-to-top button
│   ├── EnergyCalculator.tsx    # Interactive mass-energy calculator
│   ├── RockySimulator.tsx      # Rocky language tone simulator
│   ├── MissionPanel.tsx        # Accordion panel component
│   ├── TimelineFilterClient.tsx # Timeline event filter
│   └── StructuredData.tsx      # JSON-LD structured data injector
└── lib/
    └── metadata.ts             # SEO metadata and Schema.org helpers
```

## Features

- **22 pages** covering the book's timeline, characters, science, and real-world connections
- **Interactive tools:** Astrophage energy calculator, Rocky language simulator
- **SEO optimized:** Per-page metadata, structured data (BreadcrumbList, Article), Open Graph, Twitter cards
- **Dynamic sitemap** and robots.txt
- **Mobile responsive** design with dark space theme
- **Google AdSense** integration
- **Custom 404 page**

## Design

The space-themed dark UI uses a custom Tailwind color palette:

- `space-black` / `space-dark` / `space-medium` — Background layers
- `accent-blue` — Primary accent
- `accent-amber` — Secondary accent (Eridian/future elements)
- `space-border` — Borders and dividers
- `space-text` / `space-heading` — Typography

## License

This is an unofficial fan-created website and is not affiliated with Andy Weir, Amazon MGM Studios, or the official Project Hail Mary franchise.
