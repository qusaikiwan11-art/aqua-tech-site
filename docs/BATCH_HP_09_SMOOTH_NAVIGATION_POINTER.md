# HP-09 — Smooth Ordered Navigation and Site-wide Pointer Glow

## Goal

Make the header navigation follow the exact visual order of the current homepage,
improve section-to-section movement, and extend the pointer-follow light across
the complete website at a smaller, quieter scale.

## Navigation order

The desktop and mobile menus now follow this order:

1. `#flow` — Our method / منهجنا
2. `#trust` — Why us / لماذا نحن
3. `#services` — Services / الخدمات
4. `#solutions` — Solutions / الحلول
5. `#faq` — FAQ / الأسئلة
6. `#contact` — Contact / تواصل

## Changes

- Reorders desktop and mobile navigation to match the assembled page.
- Adds fixed-header offset handling so section titles are not hidden after a jump.
- Replaces the old generic `scrollIntoView` handler with a reduced-motion-aware
  smooth scrolling controller.
- Highlights the active section in desktop and mobile navigation.
- Adds a subtle scrolled state to the fixed header.
- Replaces the approximately `34rem` hero-only pointer light with a `14rem`
  site-wide pointer glow.
- Keeps the existing small hero parallax response and card motion system.
- Disables the pointer glow for touch/coarse pointers, narrow screens,
  `prefers-reduced-motion`, and the existing data-saving lite mode.

## Prerequisite

- Branch: `main`
- Base commit: `601e818`
- Base commit message: `feat: add compact product showcase`
- HP-07R and HP-08 must already be present as pending changes.

## Verification

- Production build succeeds.
- JavaScript syntax checks pass.
- Generated navigation order matches the section order.
- All six navigation targets exist exactly once in the generated page.
- No stale `#offers`, `#security`, or `#support` content returns.
- The navigation controller and site-wide pointer assets load from the page.
- The old inline `scrollIntoView` handler is absent.
- CSP, referrer policy, `security.txt`, contact behavior and translation remain intact.
