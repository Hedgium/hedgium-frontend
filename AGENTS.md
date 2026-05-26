# AGENTS.md — Hedgium Frontend (Marketing)

AI agent context for the `hedgium_frontend` Next.js project.
Read this before touching any code.

---

## Project Identity

**hedgium_frontend** is the public-facing **brand and marketing website** for Hedgium.
It is **not** the trading application. There is no auth, no dashboard, no broker integration.
The trading app lives in `hedgium_webapp`.

Purpose: brand positioning, lead capture, and legal compliance pages.

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Animations | AOS (Animate On Scroll) |
| State | Zustand v5 (theme/UI only — no server state) |
| Icons | Lucide React |
| Theme switching | next-themes |

**No backend integration.** This site does not call the Django API.
Registration and get-started flows link out or redirect to `hedgium_webapp`.

---

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home / landing — hero, features, CTA |
| `/get-started` | Lead capture / schedule a call (links or copy may point users toward `hedgium_webapp`) |
| `/legal-complaints-investor-charter` | Single consolidated page: Terms of Use, Privacy, Refund, Complaint Status, Grievance Redressal, MITC-RA, Investor Charter (in-page anchors) |

**Not in this repo:** standalone legal and disclosure pages (e.g. `/privacy-policy`, `/terms-of-use`, `/refund-policy`, `/complaint-status`, `/grievance-redressal`, `/mitc-ra`) live in **`hedgium_webapp`** under `src/app/` — see `hedgium_webapp/AGENTS.md` → Routes. Do not add duplicate legal pages here unless product explicitly asks.

All routes above are public. No protected routes, no middleware auth checks.

---

## Project Structure

```
hedgium_frontend/
├── 00_Context/             # Working style, brand voice, design principles — read first
├── src/
│   ├── app/                # App Router pages and layouts
│   ├── components/         # Shared UI components
│   │   ├── home/           # Landing page sections
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── context/            # React context providers
│   ├── hooks/              # Custom hooks
│   ├── store/              # Zustand stores (theme/UI state only)
│   └── utils/              # Shared utilities
├── public/                 # Static assets (images, fonts, icons)
└── tailwind.config.js      # Tailwind + DaisyUI theme config
```

---

## Marketing-Specific Rules

- **Every public page must have proper metadata** — `title`, `description`, and OG tags via Next.js `generateMetadata` or `metadata` export.
- **Use SSR or SSG for all pages** — no client-only rendering for content that search engines need to index.
- **AOS animations** — use sparingly; scroll-triggered entrance effects only. Don't animate critical above-the-fold content.
- **CTA copy matters** — don't change button copy without intent. "Get Started" vs "Start Free" vs "Request Demo" have different conversion implications.
- **Legal pages are compliance requirements** — do not rewrite or restructure legal copy without explicit instruction. Only fix formatting/layout bugs.

---

## Component Conventions

- **Pages are thin** — push layout sections into `components/home/` or named section components.
- **Use `next/image`** for all images — never raw `<img>` tags. Set explicit `width` / `height` or use `fill` with a sized container.
- **Use `next/link`** for all internal navigation — never `<a>` tags.
- **No `"use client"` unless required** — prefer Server Components for static marketing content.
- **Prefer DaisyUI components** — only write custom Tailwind when DaisyUI can't cover it.

---

## Design Direction

See `00_Context/design-principles.md` for the full visual system. Core rules for the marketing site:

- **Modern and minimal** — no visual clutter, every element has purpose.
- **No box shadows** — depth via borders, translucency, and backdrop blur.
- **DaisyUI semantic tokens only** — no raw hex or hardcoded grays.
- **AOS** — entrance animations only; avoid infinite or looping effects.
- **Typography** — use `@tailwindcss/typography` for long-form legal/policy pages.
- **Accessibility:** UI and content should meet **WCAG 2.1 Level A and Level AA** (contrast, focus states, semantics, keyboard paths, forms, and error messaging). On `bg-primary`, use `text-primary-content`, `text-secondary-on-primary`, or `text-positive-on-primary` — not `text-success` (fails ~3:1 on brand navy).

---

## Performance Rules

- Lighthouse score targets: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90.
- No layout shift (CLS) — always set image dimensions, avoid unstyled content flashes.
- Lazy-load below-the-fold sections with `next/dynamic` if they are heavy.
- Minimize `"use client"` usage — client JS is the main performance cost on a static marketing site.
- Avoid loading Recharts, heavy form libraries, or app-specific packages here — this is not the webapp.

---

## SEO Rules

- Every page exports `metadata` (or `generateMetadata`) with unique `title` and `description`.
- Use semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`.
- Heading hierarchy: one `<h1>` per page, logical `<h2>` / `<h3>` nesting.
- OG image and Twitter card metadata on landing and key marketing pages.

---

## What Does NOT Belong Here

| Do not add | Belongs in |
|------------|-----------|
| Auth flows (login, dashboard) | `hedgium_webapp` |
| Broker integration UI | `hedgium_webapp` |
| Trade/strategy components | `hedgium_webapp` |
| Django API calls | `hedgium_webapp` |
| JWT/session handling | `hedgium_webapp` |
| `recharts`, `react-select`, `jsonwebtoken` | `hedgium_webapp` |

---

## AI Collaboration Rules

Read `00_Context/working-style.md` for the full contract. Key points:

- Senior Next.js engineer tone — explain *why*, skip the basics.
- Production-grade code only. No shortcuts.
- No `any` in TypeScript. All props typed.
- Prefer Server Components; use `"use client"` only when unavoidable.
- When confidence is low, say so and offer trade-offs.
- Never silently guess at copy, legal text, or brand decisions — ask first.

---

## Communication Style

Read `00_Context/brand-voice.md`. Core rules:

- Get to the point. No preamble.
- Headers, bullets, code blocks consistently.
- No filler: no "Great!", "Certainly!", "It's worth noting..."
