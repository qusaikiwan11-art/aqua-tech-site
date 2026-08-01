# HP-10R — Restore Compact Footer Content

## Goal

Correct HP-10 so the Aqua.Tech footer keeps its complete information set while
remaining substantially smaller than the original oversized footer.

## Changes

- Restores the visible footer labels for About, Results, Security, Offers and
  Post-delivery Support.
- Keeps the current Method, Why Us, Services, Solutions, Contact and copyright
  content.
- Routes retired labels to the closest current live section so no footer link
  points to a removed homepage section.
- Reduces outer padding, typography, list spacing, logo size and social-control
  size beyond HP-10.
- Preserves Arabic and English translation keys and RTL/LTR behavior.

## Preserved behavior

- Retired Offers, Security and duplicate Support homepage sections remain
  removed.
- The current homepage flow remains Solutions -> FAQ -> Contact at the end.
- HP-09 smooth navigation, active-section state and site-wide pointer glow are
  unchanged.
- Contact destinations and copyright text remain present.

## Prerequisite

- HP-10 must already be applied over the pending HP-07R, HP-08 and HP-09 state.
- Branch: `main`
- Base commit: `601e818`

## Verification

- Production build succeeds.
- All expected footer translation keys exist in generated HTML.
- Footer links resolve to existing generated-page targets.
- Retired homepage sections do not return.
- JavaScript syntax and Git whitespace validation pass.
