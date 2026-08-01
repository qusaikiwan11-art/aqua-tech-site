# HP-04A — Service Paths Visual Polish

## Objective

Bring the HP-04 service paths into the visual density of the Aqua.Tech homepage while preserving the three-path information architecture.

## Included

- Reduced desktop card height by tightening the card shell, icon, title, description, list, and CTA spacing as one coordinated system.
- Narrowed the desktop services container so the cards feel like focused choices instead of full-page panels.
- Kept all twelve detailed service items visible; no capability or CTA was removed.
- Added a responsive single-column breakpoint before the three cards become too narrow.
- Added an anchor offset so the services heading clears the fixed navigation when opened from `#services` links.
- Reduced and repositioned the floating WhatsApp control into the desktop gutter to prevent overlap with the Care CTA.
- Preserved RTL/LTR, keyboard focus, hover states, mobile layout, and reduced-motion behavior.

## Files

- `css/aqua-service-paths.css`
- `docs/BATCH_HP_04A_SERVICE_PATHS_VISUAL_POLISH.md`
- `HP04A_MANIFEST.txt`
- `index.html`
- `src/partials/head.html`
- `src/template.html`

## Validation

- `npm run build`
- CSS marker and compact-density checks
- Exact three-path and twelve-item checks
- Generated services/source parity check
- JavaScript syntax checks
- Package isolation check against HP-04
- `git diff --check`
