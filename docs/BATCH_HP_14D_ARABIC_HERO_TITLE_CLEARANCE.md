# HP-14D — Arabic Hero Title Glyph Clearance

## Goal

Stop the Arabic gradient line in the homepage hero from being clipped at its
upper edge on tablet and desktop layouts.

## Implementation

- Adds vertical paint clearance to the RTL gradient title line.
- Compensates for the added clearance with margins so the title keeps the same
  visual position and total layout height.
- Leaves the hero font size, line height, animation selectors, and mobile rules
  unchanged.

## Preserved State

- HP-14A trust step-marker alignment.
- HP-14B `Aqua.Tech Method` and `Why Aqua.Tech` labels.
- HP-14C removal of Arabic shadda (`U+0651`).
- No commit or push.
