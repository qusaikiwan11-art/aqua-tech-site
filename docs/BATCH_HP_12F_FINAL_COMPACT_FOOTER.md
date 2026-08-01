# HP-12F — Final Compact Footer Correction

## Goal

Finish the footer visually after HP-10, HP-10R and HP-11 by enforcing a compact,
balanced layout that can be verified independently from Tailwind utility output.

## Changes

- Replaces utility-heavy footer layout with dedicated `aqua-site-footer__*`
  component classes.
- Keeps the full company, services and contact information set.
- Places the copyright divider directly below the content grid.
- Aligns the Aqua.Tech mark and wordmark as one brand link.
- Replaces generic Material Symbols with inline Instagram, Facebook, LinkedIn
  and GitHub SVG marks.
- Corrects the former dead `#about` and `#results` links by routing them to live
  `#trust` and `#solutions` sections.
- Keeps the mobile layout compact and readable without affecting the homepage
  sections above it.

## Preserved behavior

- Arabic and English footer translations remain unchanged.
- RTL and LTR continue to follow the document direction.
- WhatsApp and email contact destinations remain available in the contact
  column.
- HP-09 navigation and motion behavior remain unchanged.
- Removed homepage sections remain removed.

## Verification

- Production build succeeds.
- Generated HTML contains all four social SVG labels.
- All internal footer destinations exist in generated HTML.
- No generic Material Symbols remain inside the footer.
- Dedicated compact-layout markers exist in generated CSS.
- JavaScript syntax and generated-file consistency checks pass.
