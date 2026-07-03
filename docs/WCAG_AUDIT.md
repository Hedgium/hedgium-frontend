# WCAG 2.1 Level AA Audit — `hedgium_frontend`

**Date:** 2026-07-03  
**Scope:** Public marketing site (`hedgium_frontend`)  
**Method:** Static code review + remediation pass

---

## Executive summary

This pass implemented WCAG 2.1 Level AA fixes across the marketing site: reduced-motion support, touch targets, focus management, live regions, semantic controls, table headers, contrast adjustments, and new-tab link disclosure. Core infrastructure (skip link, `lang="en"`, form labeling on `/get-started`, hero video captions) was already in place.

**Recommended manual verification:** Lighthouse Accessibility on `/`, `/get-started`, `/legal-complaints-investor-charter`; screen-reader pass on mobile nav and slideshow; contrast check on hero overlay over video.

---

## Fixes implemented

| # | Criterion | File | Change |
|---|-----------|------|--------|
| 1 | 2.3.3 | `src/app/global.css` | Added `prefers-reduced-motion` block; gated `.card-hover`; added `.touch-target` utility |
| 2 | 2.3.3 | `src/app/page.tsx` | Skip AOS when reduced motion; `once: true`; smooth scroll respects motion preference |
| 3 | 2.3.3 | `src/components/home/WhatWeDoSection.tsx` | Skip slideshow auto-advance when reduced motion |
| 4 | 2.5.5 | `HeroSection.tsx`, `WhatWeDoSection.tsx`, `Navbar.tsx`, `AlertsContainer.tsx` | 44×44px touch targets via `.touch-target` |
| 5 | 4.1.3 | `WhatWeDoSection.tsx` | `aria-live` region announces slide changes |
| 6 | 4.1.3 | `AlertsContainer.tsx` | Error toasts use `role="alert"` + `aria-live="assertive"` |
| 7 | 2.4.3 | `Navbar.tsx` | Mobile menu focus trap; focus first item on open; `rel` on Login |
| 8 | 3.2.2 / G201 | `Navbar.tsx`, `Footer.tsx`, `ContactSection.tsx`, `get-started/page.tsx`, legal components | `OpensInNewTabHint` for `target="_blank"` links |
| 9 | 1.4.3 | `PerformanceSection.tsx` | Replaced `text-primary-content/80` with full `text-primary-content` on footnotes |
| 10 | 1.4.3 | `ComparisonTable.tsx` | Added `bg-primary` fallback behind category labels |
| 11 | 2.4.4 | `ContactSection.tsx` | `mailto:` and `tel:` links for email/phone |
| 12 | 4.1.2 | Legal `*Content.tsx` (7 files) | Print controls changed from `<a>` to `<button type="button">` |
| 13 | 1.3.1 | `ComplaintStatusContent.tsx`, `GrievanceRedressalContent.tsx` | `scope="col"` on table headers; empty grand-total cells `aria-hidden` |
| 14 | 2.4.3 | `get-started/page.tsx` | Focus moves to step/success heading on navigation (skips initial mount) |
| 15 | 1.3.1 | `get-started/page.tsx` | `aria-current="step"`; `aria-required` on investment radiogroup |
| 16 | 4.1.3 | `get-started/layout.tsx` | Loading fallback `role="status"` + `aria-live` |
| 17 | 1.1.1 | `not-found.tsx`, `WhyHedgiumSection.tsx` | Decorative SVG/Lock icons `aria-hidden` |
| 18 | 1.4.4 | `HeroSection.tsx` | Transcript toggle bumped from 11px to `text-xs` |

---

## Already compliant (no change)

| Area | Location |
|------|----------|
| Document language | `layout.tsx` — `lang="en"` |
| Skip link | `layout.tsx` → `#main-content` |
| Focus visible | `global.css` `:focus-visible` |
| Hero video captions + transcript | `HeroSection.tsx` |
| Marketing table captions + scope | `PerformanceSection.tsx`, `ComparisonTable.tsx` |
| ARIA tabs + keyboard nav | `UnlockPotentialSection.tsx`, `WhyHedgiumSection.tsx` |
| Get-started form labels/errors | `get-started/page.tsx` |
| Dev axe-core | `AxeDevTools.tsx` |
| Embedded legal heading levels | Legal components use `h2` when embedded |

---

## Manual review remaining

| Item | Criterion | Notes |
|------|-----------|-------|
| Hero `h1` over video | 1.4.3 | Verify contrast on varied video frames |
| `text-base-content/90` muted text | 1.4.3 | Spot-check with contrast checker on `base-100` / `base-200` |
| Comparison category image labels | 1.4.3 | `bg-primary` fallback added; verify on slow connections |
| Print output for legal docs | 1.4.3 | Test browser print preview |
| Lighthouse score ≥ 90 | — | Run on production build |

---

## New shared component

- `src/components/OpensInNewTabHint.tsx` — screen-reader-only “(opens in new tab)” hint for external links.
