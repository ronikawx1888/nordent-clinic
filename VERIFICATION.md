# Verification

## Checks

- Motion scope checked at 1480 and 375 px: About Us, Before / After, Reviews, Prices and FAQ cards have no entrance or hover movement. Before / After photo zoom is restored inside static cards, and FAQ answers have eased height transitions. Other card entrances remain active. Service hover retains its original static shadow without adding a hover shadow. Hero objects settle within 1 px of their static positions. Rapid FAQ clicks, keyboard input, reduced-motion switching and keyboard visibility pass; no browser errors or overflow.
- Hero consultation button bottom aligns with the visible implant edge at 1024, 1480 and 1920 px (within 1 px); its vertical position stays fixed throughout the intro animation. Booking navigation passes.
- Strict TypeScript type check.
- Vite production build.
- Chromium browser rendering at 320, 375, 768, 1440 and 1920 px.
- No missing image assets or JavaScript errors.
- No page-level horizontal overflow.
- Mobile navigation opens, closes, follows anchors and updates its accessible state.
- Services and prices expand with their accessible states updated.
- FAQ opens one answer at a time.
- Results dialog navigates cases, closes with Escape and restores focus.
- Doctor booking link selects the corresponding doctor.
- Required booking fields reject an empty form; correctly filled fields pass native validity checks.
- Motion settings disable GSAP animations when reduced motion is requested.

## Limitations

All thirteen sections were refined against user-supplied PNG exports, with original assets and layout details from the local `.fig` scene graph. Exact pixel equivalence is not asserted because font rasterization and image resampling can differ. Browser checks use Chromium; Safari and Firefox have not been tested.

The updated Footer was checked at 320, 375, 768, 1480 and 1920 px, including all three SVG icons, seven internal navigation destinations, phone/email link destinations, copyright color and horizontal overflow. At 1920 px the footer height is 869 px, the Clinic column begins at x=1170 and the wordmark begins at y=555, matching the supplied export. Desktop and mobile screenshots were visually inspected. Social profile navigation is pending real clinic URLs; no profiles are fabricated.

The updated Contact Form was checked at 320, 375, 768, 1480 and 1920 px, including image loading, horizontal overflow, required fields, invalid email rejection, past-date rejection, valid completed input and consent requirements. Consent is unchecked by default. The empty date placeholder updates correctly when filled or cleared. At 1920 px the form measures approximately 608 × 996 px at x=1141, y=120; fields measure 488 × 70 px, matching the supplied export. Desktop and mobile screenshots were visually inspected. No email request was submitted.

The updated FAQ section was checked at 320, 375, 768, 1480 and 1920 px, including horizontal overflow, all six answers, single-answer expansion, closing and keyboard activation. At 1920 px the section height is 1100 px and question panels measure 909 × 110 px at x=971, with y positions 120, 370, 495, 620, 745 and 870, matching the supplied export. Desktop and mobile screenshots were visually inspected.

The updated Location section was checked at 320, 375, 768, 1480 and 1920 px, including map image loading, horizontal overflow, booking navigation and the phone and map link destinations. No call was placed. At 1920 px the section height is approximately 889 px and the map measures 909 × 554 px at x=971, y=215, matching the supplied export. Desktop and mobile screenshots were visually inspected.

The updated Process section was checked at 320, 375, 768, 1480 and 1920 px, including all four photo assets, horizontal overflow and the treatment link reaching the booking form. At 1920 px the section height is approximately 861 px, cards are 448 px wide and begin at y=405 (the second card at y=406), matching the supplied export. Desktop and mobile screenshots were visually inspected; mean absolute channel difference from the desktop reference is 0.905 / 255.

The updated Prices section was checked at 320, 375, 768, 1480 and 1920 px, including image loading, horizontal overflow, ten price amounts and mobile expand/collapse behaviour. At 1920 px each row measures approximately 905 × 76 px; columns begin at x=40 and x=975 and rows begin at y=495, matching the supplied export. Desktop and expanded mobile screenshots were visually inspected.

The updated Doctors section was checked at 320, 375, 768, 1480 and 1920 px, including local font and portrait loading, horizontal overflow and all three booking links selecting the correct doctor. At 1920 px each card measures 600 × 735 px and begins 405 px from the top of the section, matching the supplied export. The desktop and mobile screenshots were visually inspected.

The updated Reviews section was checked at 320, 375, 768, 1480 and 1920 px, including mobile scrolling, dialog opening, close button, Escape dismissal and focus return. At 1920 px its section height is 1082 px and each card measures 444 × 387 px, matching the supplied export. All four supplied reviews are available in the dialog.

The updated Before / After section was checked at 320, 375, 768, 1480 and 1920 px, including all four image triggers, gallery navigation, Escape dismissal and focus return. At 1920 px its section height is 1135 px and both comparison cards measure 905 × 630 px, matching the supplied export. The screenshot comparison has a mean absolute channel difference of 0.564 / 255.

The booking form prepares an email; no backend delivery or real appointment is tested. No enquiries were sent during verification.
