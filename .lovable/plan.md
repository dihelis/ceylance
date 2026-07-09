## Goal

Replace the current "Plain-English services grid" in `src/components/ServicesSection.tsx` with a flat, no-rounded-corners "Build your package" table that turns the six outcomes into a decision helper, not a repeat of the heatmap above.

## Proposed layout

A full-width table on desktop, stacking to cards on mobile. Flat, square aesthetic to match the heatmap tiles and the recently squared service cards.

| Outcome | Best for | What you get | Typical timeline | Action |
| --- | --- | --- | --- | --- |
| Take my idea to launch | New founders, non-technical owners with an app idea | Scope, design, build, launch and handover | 6–12 weeks | Start this package |
| Build a mobile app | Businesses that need a customer-facing iOS/Android app | Native-quality mobile app, App Store listing | 8–14 weeks | Start this package |
| A website that grows the business | Service businesses, coaches, clinics, trades | Conversion-focused site + CMS + booking/contact flow | 3–8 weeks | Start this package |
| Put AI to work in your business | Teams drowning in documents, search or repetitive queries | AI assistant, document processing or search workflow | 4–10 weeks | Start this package |
| Automate the repetitive stuff | Businesses manually copying data between tools | Workflow integration, auto quotes/invoices/reports | 3–8 weeks | Start this package |
| Modernise a tired system | Companies stuck on old software or spreadsheets | Refactor/rebuild to a fast, secure, cloud-based system | 8–16 weeks | Start this package |

## Design details

- Flat, no rounded corners (consistent with the heatmap and squared cards).
- Header row uses a subtle teal/primary tint to separate it from the body.
- Row hover: 1px primary border or a slight lift (no rounded corners).
- Each action cell has a small square icon button (arrow) instead of a pill button.
- On mobile, rows collapse into compact stacked cards with labeled rows, not a horizontal table.
- Keep the existing section header text "Pick the outcome. We handle the rest." and the "Not sure where to start? Talk to us" CTA.

## Technical approach

- Replace the `services` card map with a semantic `<table>` (desktop) / card stack (mobile) using Tailwind.
- Use the existing design tokens: `bg-secondary`, `text-secondary-foreground`, `primary`, `border-secondary-foreground/10`.
- Keep the same Framer Motion reveal animation on the section header and rows.
- No new dependencies.

## Scope

- Only `src/components/ServicesSection.tsx` is affected.
- No backend changes.
- No routing changes.

## Acceptance

- The section no longer repeats the heatmap content as a second card grid.
- The table reads as a decision helper with clear columns.
- Build passes and the visual style matches the flat, square-edged theme.