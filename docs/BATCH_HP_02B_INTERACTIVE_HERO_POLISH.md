# HP-02B — Interactive Hero Polish

## Objective

Polish the Aqua.Tech signature hero with restrained pointer interaction, clearer terminal feedback, and a continuous flow signal while preserving the HP-02A entrance sequence, accessibility, and performance profile.

## Included

- Composited pointer-following light contained within the hero.
- Refined desktop parallax values for the grid, auras, and runtime window.
- Pointer-aware terminal sheen, border, shadow, and workflow-row feedback.
- Continuous light tracer that starts only after `FLOW ONLINE`.
- Improved button hover, focus, press, and pointer-light reset states.
- Arabic translation for the hero capability kicker.
- Higher desktop composition with a compact-height safeguard.
- Touch-device safeguards for pointer-only effects.
- Complete `prefers-reduced-motion` fallback, including disabling the tracer.
- HP-02B cache-busting query strings for the hero CSS and JavaScript.

## Files

- `css/aqua-hero-motion.css`
- `js/aqua-hero-motion.js`
- `js/site-i18n.js`
- `src/partials/hero.html`
- `src/partials/head.html`
- `src/partials/scripts.html`
- `src/template.html`
- `index.html`
- `docs/BATCH_HP_02B_INTERACTIVE_HERO_POLISH.md`
- `HP02B_MANIFEST.txt`

## Performance Approach

The pointer light moves with a composited transform and pointer updates are throttled through `requestAnimationFrame`. The flow tracer uses the native SVG motion engine and starts only after the one-time terminal sequence completes. No third-party animation library is introduced.

## Validation

- `node --check js/aqua-hero-motion.js`
- `node --check js/site-i18n.js`
- `npm run build`
- HTML marker checks in both `src/template.html` and `index.html`
- Touch and reduced-motion safeguard checks
- `git diff --check`
