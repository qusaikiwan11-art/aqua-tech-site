# HP-10 — Compact Footer

## Goal

Reduce the excessive vertical height of the Aqua.Tech footer while preserving
its content hierarchy, readability, bilingual behavior and responsive layout.

## Changes

- Reduces outer footer padding from `py-16` to `py-10`.
- Reduces the primary grid gap and bottom margin.
- Tightens the brand, link-heading and link-list spacing.
- Reduces social controls from 44px to 40px and uses a slightly tighter radius.
- Reduces the copyright divider spacing.
- Keeps the existing three-column desktop information architecture and the
  responsive stacked mobile layout.

## Preserved behavior

- Arabic and English translation keys are unchanged.
- RTL/LTR direction remains controlled by the existing locale system.
- All current footer destinations remain unchanged.
- The HP-09 navigation order, active-section state, smooth scrolling and
  site-wide pointer glow are unchanged.
- Retired offers, marketing security and duplicate support links remain absent
  from the generated page.

## Prerequisite

- Branch: `main`
- Base commit: `601e818`
- Base commit message: `feat: add compact product showcase`
- HP-07R, HP-08 and HP-09 must already be present as pending changes.

## Verification

- Production build succeeds.
- Generated footer contains the compact spacing markers.
- Footer link destinations and translation keys are preserved.
- Retired homepage links do not return.
- JavaScript syntax, CSP, referrer policy and `security.txt` remain valid.
