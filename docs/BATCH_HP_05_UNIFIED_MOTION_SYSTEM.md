# HP-05 — Unified Motion System

## Objective

Make the full Aqua.Tech homepage feel like one continuous, controlled flow without turning the page into an animation showcase.

## Included

- Removed the decorative connector rail between the three service cards so each choice reads as an independent path.
- Added one shared reveal rhythm for section headings and major cards.
- Standardized hover lift, focus visibility, timing, easing, and stagger behavior.
- Added a subtle desktop scroll-progress signal to reinforce the flow concept.
- Preserved the HP-02B hero sequence as the intentional opening motion.
- Disabled reveal motion and ambient animation for reduced-motion users, coarse pointers, narrow screens, and data-saver mode.
- Used one IntersectionObserver and passive scroll handling with requestAnimationFrame batching.
- Kept RTL/LTR direction awareness and keyboard focus behavior.

## Files

- `css/aqua-motion-system.css`
- `css/aqua-service-paths.css`
- `docs/BATCH_HP_05_UNIFIED_MOTION_SYSTEM.md`
- `dist/output.css`
- `HP05_MANIFEST.txt`
- `index.html`
- `js/aqua-motion-system.js`
- `src/partials/head.html`
- `src/partials/scripts.html`
- `src/partials/services.html`
- `src/template.html`

## Validation

- Production build
- JavaScript syntax checks
- Service connector removal checks
- One shared motion asset check
- Reduced-motion and mobile safeguards
- Three service cards and twelve service items preserved
- Generated services/source parity
- Git whitespace check
