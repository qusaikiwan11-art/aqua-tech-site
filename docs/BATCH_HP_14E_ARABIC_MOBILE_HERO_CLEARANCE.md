# HP-14E — Arabic mobile hero glyph clearance

## Problem

HP-14D corrected the Arabic gradient-title clearance only for viewports at or
above `561px`. On high-density phones the CSS viewport remains below that
breakpoint, so the mobile rule continued to apply a negative top margin and the
Arabic glyphs could still be clipped.

## Change

- Increased the mobile Arabic title-line paint clearance.
- Reduced the negative top compensation and restored a small intentional gap
  before the accent line.
- Kept the existing mobile font-size, RTL line-height, title width, animation,
  and bilingual content unchanged.

## Validation

- Production build passes.
- Both source and generated HTML contain the HP-14E mobile rule.
- Arabic shadda count remains zero.
- HP-14A alignment and HP-14B labels remain preserved.
