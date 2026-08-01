# HP-13R3 — Mobile Hero Scale Correction + Floating Header Preservation

## Goal

Prevent the Arabic hero title and subtitle from clipping on narrow mobile screens while preserving the HP-02A/HP-02B entrance motion.

Restore the approved floating pill header after production builds without changing the mobile Hero fix.

Correct the remaining visual overflow reported after HP-13R2 by reducing the mobile type scale itself, rather than relying only on container shrink constraints.

## Root cause

The first HP-13 pass fixed Arabic headline paint clipping, but the mobile copy still lacked explicit shrink constraints. The subtitle could therefore render wider than the visible hero area on narrow screens. Its composited blur layer also increased the chance of edge clipping during entrance motion.

The floating header still existed in `src/template.html`, but `scripts/build-html.js` replaces the first header with `src/partials/header.html`. That partial still contained the retired full-width bar, so every `npm run build` silently restored the wrong header in generated `index.html`.

After HP-13R2, the container was technically constrained, but the title and subtitle could still occupy too much of the narrow viewport. A width constraint does not shrink font glyphs, so the final pass applies a smaller viewport-driven scale and a fixed readable text column.

## Implementation

- Keep the existing opacity and vertical-translation entrance animation.
- Constrain the hero shell, copy, title, and subtitle to the mobile viewport.
- Add `min-width: 0` to allow the grid content to shrink safely.
- Use a safer title scale at viewports up to `560px`.
- Cap the mobile title at `2.85rem` and scale it from `10.5vw`.
- Center every RTL title line inside a maximum `22rem` headline block.
- Constrain the subtitle to a centered `22rem` reading column.
- Respect left and right device safe areas.
- Preserve the RTL headline paint-safe area with a `1.22` mobile line-height.
- Enable safe subtitle wrapping with centered mobile alignment.
- Disable blur only for the title and subtitle on mobile.
- Synchronize `src/partials/header.html` with the approved floating pill header.
- Preserve the HP-13R2 floating pill header without additional markup or behavior changes.
- Keep the desktop order: brand, six navigation links, then language, WhatsApp, and Start Project actions.
- Keep the same six live links in the mobile menu.
- Remove the stale Offers link from the template header so source and generated output agree.

## Scope

- `src/template.html`
- `src/partials/header.html`
- Generated `index.html`
- HP-13 manifest and documentation

No JavaScript, translations, desktop hero layout, runtime panel, section order, or navigation behavior was changed.
