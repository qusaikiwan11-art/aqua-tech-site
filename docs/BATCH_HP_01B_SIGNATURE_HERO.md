# HP-01B — Signature Hero Foundation

## Goal

Replace the previous vertically stacked homepage hero with a full-viewport, brand-led hero built around Aqua.Tech’s adopted statement:

- Arabic: **نحوّل التعقيد إلى تدفّق.**
- English: **We turn complexity into flow.**

## Implemented

- Full-screen desktop hero using `100svh`.
- Two-column desktop composition: brand message and Aqua Flow runtime panel.
- Terminal content changed from decorative commands to a meaningful business-flow simulation.
- New signature flow line, technical grid, controlled glow, and visual depth.
- Responsive stacking for tablet and mobile.
- Height-specific tuning for shorter desktop screens.
- Arabic and English hero translations updated.
- Primary and secondary CTAs updated.
- Capability proof row added.
- Current monolithic source and hero/main partials kept aligned.

## Changed files

- `src/template.html`
- `src/partials/hero.html`
- `src/partials/main.html`
- `js/site-i18n.js`
- `index.html`

## Validation completed

- `node scripts/build-html.js` passed.
- `node --check js/site-i18n.js` passed.
- Generated HTML parsed successfully.
- Hero rendered at exactly one viewport height at 1920×1080 and 1366×768.
- Runtime panel remains fully visible at both desktop sizes.

## Intentionally deferred

This batch establishes composition and visual hierarchy. Sequenced entry animations, terminal progression, cursor response, and scroll-linked flow motion belong to the following motion batch after visual approval.
