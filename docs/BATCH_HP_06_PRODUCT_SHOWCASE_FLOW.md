# HP-06 — Product Showcase Flow

## Goal

Bring the ready-solutions section into the same Aqua.Tech visual language as
the signature hero, complexity-to-flow story, service paths, and unified motion
system.

## Changes

- Replaced the narrow four-column image cards with a responsive 2×2 product
  showcase.
- Removed all remote Google image dependencies from the solutions section.
- Added lightweight, product-specific interface previews built entirely with
  semantic HTML and CSS.
- Preserved the existing four products, service values, contact anchors, and
  `js-service-cta` integration.
- Added bilingual product categories and a short adaptation note.
- Added responsive RTL/LTR behavior and reduced-motion protection.
- Made `src/partials/solutions.html` the enforced source of truth during the
  production build.

## Products

1. Viresto — legal operations.
2. ResumeIQ — career intelligence.
3. Smart Attendance — workforce automation.
4. University Projects Platform — academic workflow.

## Files

- `css/aqua-product-showcase.css`
- `src/partials/solutions.html`
- `src/partials/head.html`
- `js/site-i18n.js`
- `scripts/build-html.js`
- `index.html`
- `dist/output.css`

## Validation

- Production build passes.
- JavaScript syntax checks pass.
- Generated `#solutions` matches its source partial.
- Exactly four product cards and four service CTAs remain.
- No remote images remain inside `#solutions`.
- Arabic and English strings cover all new visible copy.
- Desktop, single-column responsive, RTL, and reduced-motion rules exist.
