# HP-06A — Compact Product Cards

## Goal

Refine the HP-06 product showcase so the four cards feel proportionate to the
rest of the Aqua.Tech homepage instead of behaving like oversized standalone
panels.

## Changes

- Preserved the responsive 2×2 desktop product grid.
- Reduced the showcase shell from `86rem` to `76rem`.
- Reduced the desktop product preview height from `16.25rem` to `12.6rem`.
- Tightened card padding, text spacing, feature pills, and CTA dimensions.
- Scaled the four local interface previews consistently.
- Limited single-column cards to `44rem` on tablet widths.
- Kept the existing products, translations, service values, RTL behavior,
  contact links, hover behavior, and reduced-motion protection unchanged.
- Updated the stylesheet cache key to `hp06a`.

## Validation

- Production build passes.
- The generated page contains one `hp06a` stylesheet link.
- The product grid remains two columns on desktop and one column below
  `980px`.
- Exactly four product cards and four service CTAs remain.
- All four product-specific interface previews remain present.
- The generated solutions section still matches its source partial.
- No remote images or URLs exist inside the solutions section.
