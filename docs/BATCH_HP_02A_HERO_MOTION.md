# HP-02A — Hero Entrance & Terminal Sequence

## Objective

Introduce a focused motion system for the Aqua.Tech signature hero without adding a heavy animation library or compromising accessibility and performance.

## Included

- Sequenced hero entrance for the kicker, title, subtitle, actions, proof points, runtime window, and caption.
- SVG flow-line drawing animation.
- Staged Aqua Flow Engine terminal sequence.
- Active-state highlight while each workflow step completes.
- Final `FLOW ONLINE` confirmation pulse.
- Subtle desktop pointer parallax for the grid, aura, and runtime window.
- Pointer-aware button light response.
- Strong `prefers-reduced-motion` fallback.
- Touch-device safeguards that disable pointer tilt and parallax.
- Exclusion of the signature hero from the legacy generic section reveal animation to prevent transform conflicts.
- Small layout polish: lighter supporting copy and a slightly higher desktop composition.

## Files

- `css/aqua-hero-motion.css`
- `js/aqua-hero-motion.js`
- `src/template.html`
- `index.html`
- `src/partials/head.html`
- `src/partials/scripts.html`

## Performance Approach

The implementation uses CSS transforms, opacity, `requestAnimationFrame`, and short one-time timers. It introduces no third-party animation dependency and does not animate layout properties such as width, height, top, or left.

## Validation

- `node --check js/aqua-hero-motion.js`
- `node --check js/site-i18n.js`
- `npm run build`
- `git diff --check`
