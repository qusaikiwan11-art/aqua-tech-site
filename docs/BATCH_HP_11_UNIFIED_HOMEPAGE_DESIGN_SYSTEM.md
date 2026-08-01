# HP-11 — Unified Homepage Design System

## Goal

Make the Aqua.Tech homepage read and feel like one connected product story,
without deleting content or flattening the individual purpose of each section.

## Audit result

Before HP-11, Flow, Services and Solutions used purpose-built visual systems,
while Trust, FAQ and Contact still used older generic Tailwind composition.
Typography also referenced Manrope, Space Grotesk and Alexandria without loading
those font families, so browsers could render different fallback fonts across
the page.

## Changes

- Adds shared section spacing, heading scale, introduction width, panel radius,
  border color, background depth and responsive behavior.
- Applies the shared system to Trust, FAQ and Contact while preserving their
  content and functionality.
- Harmonizes the title and introduction scale used by Flow, Services and
  Solutions with the same section contract.
- Adds subtle section boundaries and alternating depth so the page flows from
  one section to the next instead of looking like separate templates.
- Standardizes Trust, FAQ and Contact cards on one Aqua panel treatment.
- Keeps the compact HP-10R footer and integrates it into the same background,
  border and typography system.
- Loads the fonts actually declared by the design system and removes the hero's
  isolated Inter dependency.
- Makes the header, Flow, Trust, Services, Solutions, FAQ, Contact and Footer
  build from canonical partial sources.
- Adds complete bilingual keys for desktop and mobile navigation.
- Adds canonical bilingual markers to all twelve FAQ questions and answers.
- Preserves `© Aqua.Tech — جميع الحقوق محفوظة.` and
  `© Aqua.Tech — All rights reserved.`.

## Preserved behavior

- Section order remains Flow -> Trust -> Services -> Solutions -> FAQ ->
  Contact.
- Retired Offers, Security and duplicate Support sections do not return.
- HP-09 smooth navigation, active-section tracking and site-wide pointer glow
  remain unchanged.
- Contact form fields, custom selects, proposal delivery and contact links
  remain unchanged.
- Arabic-first RTL and English LTR behavior remain unchanged.
- Reduced-motion behavior remains supported.

## Prerequisite

- HP-10R must already be applied.
- Branch: `main`
- Base commit: `601e818`

## Verification

- Production HTML and Tailwind CSS builds succeed.
- JavaScript syntax checks pass.
- Generated section order is exact and section IDs are unique.
- All desktop and mobile navigation targets exist.
- Every generated `data-i18n` key exists in both language dictionaries.
- Arabic and English copyright text is present.
- Unified style and typography markers exist in production CSS and HTML.
- Generated HTML contains no trailing whitespace.
