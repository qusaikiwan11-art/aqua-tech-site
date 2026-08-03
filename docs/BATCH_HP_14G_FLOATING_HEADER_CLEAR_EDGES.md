# HP-14G — Floating Header Clear Edges

## Goal

Preserve the floating oval navigation bar while removing the full-width visual layer that appeared behind it after scrolling.

## Root cause

The scroll state was applied to the full-width `header` wrapper. Its background and shadow extended across the viewport even though the visible navigation component is the narrower `.aqua-top-pill`.

## Change

- The outer header remains transparent in both default and scrolled states.
- The outer header no longer receives a border or shadow.
- The oval navigation pill, its glass treatment, position, and behavior remain unchanged.
- No footer-hide behavior was added.

## Scope

- `css/aqua-navigation.css`

## Validation

- Production build passes.
- Navigation JavaScript syntax passes.
- The scrolled header state contains no full-width background or shadow.
- The floating pill styles remain present.
