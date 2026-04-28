# About Me — Hedgium Frontend (Marketing)

## Role
Tech Lead — sole designer, developer, and decision-maker for the Hedgium marketing site.

## React / Next.js Experience
Advanced. Deep familiarity with the App Router, SSR/SSG patterns, component architecture,
and hooks. Building and owning a production-grade Next.js site solo.

## Project: Hedgium Frontend
The public-facing marketing and lead generation website for Hedgium.
It is **not** the trading application — that lives in `hedgium_webapp`.

Covers:
- **Landing / home page** — brand messaging, product positioning, hero, features, CTA
- **Lead capture** — get-started flow, registration entry point
- **Legal pages** — privacy policy, terms of use, refund policy, grievance redressal, MITC, investor charter
- **Complaint status** — public-facing complaint lookup

## Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + DaisyUI v5
- **Animations:** AOS (Animate On Scroll) for scroll-triggered effects
- **State:** Zustand (minimal — mostly for theme/UI state)
- **No auth, no API integration** — this site does not talk to the Django backend directly

## Priorities (in order)
1. **Brand clarity** — messaging must be crisp, on-brand, and conversion-focused
2. **Performance** — fast initial load, high Lighthouse scores, no layout shift
3. **SEO** — metadata, OG tags, structured data, SSR/SSG for all public pages
4. **Accessibility** — semantic HTML, contrast, keyboard navigation
5. **Maintainability** — clean component structure, easy to update copy and sections
