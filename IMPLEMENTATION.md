# Nordent Clinic

Responsive dental clinic landing page implemented from the supplied Figma desktop frame `7240:3165` (1920 px) and mobile frame `7240:4054` (375 px).

Built with TypeScript, Vite, CSS Grid/Flexbox and GSAP with ScrollTrigger. Images and copy come from the supplied local `.fig` file; fonts are self-hosted. No Figma connection or API key is needed to run the project.

## Run

Requires Node.js 22.12+ (Node.js 24 recommended).

```sh
npm install
npm run dev
```

Or use pnpm 11 with the included lockfile:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Production

```sh
npm run build
npm run preview
```

Upload the contents of `dist/` to any static host. All asset paths are relative, so the build also supports a repository subdirectory, such as GitHub Pages. Serve it over HTTP; opening `dist/index.html` directly as a file will not load JavaScript modules.

## Features

- Responsive desktop, tablet and mobile layouts.
- GSAP intro and section reveals; hero objects settle at their Figma positions.
- System `prefers-reduced-motion` support; content remains visible when motion is reduced.
- GSAP entrances remain on services, doctors, process, emergency list, map and booking form. About Us, Before / After, Reviews, Prices and FAQ remain static. Hover/focus lifts service, doctor and process cards without adding shadows or changing layout; focused cards are revealed immediately for keyboard access.
- The hero tooth and implant slide gently from opposite sides and settle at their design positions. Before / After photos zoom independently inside static cards. FAQ answers animate their height over 550 ms; rapid clicks, keyboard input and reduced-motion preferences are supported.
- Keyboard-accessible mobile menu and native FAQ accordion.
- Scrollable services and reviews, expandable services and prices on mobile.
- Native results dialog with Escape dismissal, focus return and gallery navigation.
- Booking links preselect a service or doctor.
- Native form validation and future appointment time validation.
- Optimized WebP images, deferred image loading, local variable fonts and a skip link.

## Booking integration

The source design provides no backend or booking endpoint. A valid form submission opens the visitor's email application with a prefilled enquiry to `info@nordentclinic.com`. The visitor must send that email. The interface does not claim a booking was sent or confirmed.

Before production, verify all clinic contact details, prices, qualifications, emergency claims and patient images from the supplied design. Configure a real booking API if direct submission is required. The FAQ answers after the first item include implementation copy where the source contained collapsed questions without answer text. A single results gallery contains only the cases supplied in the design; it does not fabricate additional cases.

## Source structure

- `src/main.ts`: semantic markup, interaction logic and animations.
- `src/content.json`: design copy and image mapping.
- `src/style.css`: tokens, section layouts and breakpoints.
- `src/hero.css`: the first screen matched to the supplied 1920 × 1080 PNG, including typography runs, image crop and decorative arc.
- `src/about.css`: the About Us section matched to the supplied 1920 × 1097 PNG, with asymmetric card placement and word-level heading colors.
- `src/cta.css`: the emergency CTA matched to the supplied 1920 × 1075 PNG, including mirrored artwork, a local SVG color filter, background blur, glass badges and ruled list items.
- `src/services.css`: the services section matched to the supplied 1920 × 1148 PNG, including four equal cards, original photo crops, typography and consultation buttons.
- `src/results.css`: the Before / After section matched to the supplied 1920 × 1135 PNG, with original image crop transforms, two comparison cards and gallery access.
- `src/reviews.css`: the reviews section matched to the supplied 1920 × 1082 PNG, with stepped background bands, blue cards and white author panels. Read More Reviews opens the four supplied reviews in an accessible dialog; no additional reviews are invented.
- `src/doctors.css`: the doctors section matched to the supplied 1920 × 1267 PNG, including word-level heading colors, original portrait crops, Livvic card text and individual booking buttons.
- `src/prices.css`: the prices section matched to the supplied 1920 × 1055 PNG, including the three-image collage, word-level heading colors, two columns of ten prices and blue euro amounts.
- `src/process.css`: the process section matched to the supplied 1920 × 861 PNG, including original photo crops, dark overlays, clipped step numbers, heading colors and treatment booking link.
- `src/location.css`: the location section matched to the supplied 1920 × 889 PNG, including original map crop, two-color heading, square list markers and booking/call buttons.
- `src/faq.css`: the FAQ section matched to the supplied 1920 × 1100 PNG, including the large background lettering, intro text wrapping, pale question panels, white chevron controls and expanded first answer.
- `src/booking.css`: the contact form matched to the supplied 1920 × 1236 PNG, including original photo crops, decorative lettering, glass panel, transparent fields and white submit button. The native date/time input shows the design placeholder when empty. Consent requires visitor selection. The email handoff explanation appears when the desktop form has focus and remains visible on mobile.
- `src/footer.css`: the footer matched to the supplied 1920 × 869 PNG, including original SVG social icons, seven navigation links, aligned contacts, oversized wordmark and gray copyright. Social icons remain non-interactive until clinic profile URLs are supplied.
- `src/motion.css`: shared hover/focus effects, enabled only for fine pointers with motion allowed.
- `public/images/`: images extracted from the supplied design, with original assets retained for sections matched to PNG exports.
- `public/fonts/`: Urbanist, Instrument Sans, Literata, Livvic and Roboto with their SIL Open Font Licenses. Livvic and Roboto were downloaded from the official Google Fonts repository.

The original `.fig`, unrelated pages, personal workspace metadata, build tools used for extraction and credentials are excluded from this project.

## Verification

TypeScript and the production build pass. Browser checks cover widths 320, 375, 768, 1440 and 1920 px; image loading, overflow, menu navigation, expansion controls, FAQ behaviour, results dialog, doctor selection and form validity. See `VERIFICATION.md` for the final check results and limitations.
