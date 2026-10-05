# Dental by Saba — Phase 1 Prototype

## Goal

Build a high-fidelity, responsive homepage concept that feels like a luxury beauty brand translated into gentle modern dental care. Keep all unverified clinic facts visibly marked as placeholders.

## What I’ll build

- A near-full-screen editorial hero with an elegant generated portrait, pearl-like interactive 3D sculpture, staggered entrance, parallax, and clear appointment actions.
- Sticky glass navigation with desktop and mobile menus.
- Trust strip, clinic philosophy, Dr. Saba profile, asymmetric treatment showcase, smile-gallery concept, care pillars, patient journey, reviews placeholder, Instagram preview, clinic experience, final call-to-action, contact area, and footer.
- Appointment request dialog with accessible fields and a prototype success state.
- Floating WhatsApp placeholder action and responsive mobile treatment/gallery interactions.
- Separate About, Treatments, Gallery, Reviews, and Contact pages using the same visual system; featured treatment detail pages will use a reusable treatment template.
- SEO metadata per page, accessible focus states, reduced-motion handling, lazy imagery, and polished page transitions.

## Visual direction

- Warm ivory canvas, blush and dusty rose surfaces, espresso typography, and restrained champagne accents.
- Cormorant Garamond display type paired with Manrope body type.
- Organic image crops, pill controls, fine borders, broad whitespace, and calm editorial composition.
- Real/generated lifestyle imagery only; no cartoon teeth, fake clinical proof, fake reviews, or invented credentials.

## Technical details

- Use TanStack Router (the project’s fixed router), React, TypeScript, Tailwind CSS v4, React Hook Form, and lightweight React Three Fiber for the hero sculpture.
- Keep clinic copy and treatment data in a single editable content module.
- Use generated local images and a procedural reflective sculpture, with CSS depth effects elsewhere for mobile performance.
- The appointment flow remains frontend-only in this phase; no messages are sent and no patient data is stored.

## Validation

- Check desktop and mobile layouts in the browser.
- Verify the hero scene renders, motion is subtle, controls work by keyboard, the dialog submits to its success state, and all pages load without console or build errors.
