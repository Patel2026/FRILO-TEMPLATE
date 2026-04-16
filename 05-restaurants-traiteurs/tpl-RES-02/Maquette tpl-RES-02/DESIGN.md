# Design System Strategy: The Kinetic Gourmet

## 1. Overview & Creative North Star
This design system is built to bridge the gap between "fast-food utility" and "editorial culinary experience." The Creative North Star is **"Kinetic Gourmet."** 

We are moving away from the static, boxy layouts typical of the fast-casual industry. Instead, this design system leverages high-energy movement, intentional asymmetry, and a sophisticated layering of warm tones to evoke the heat of a kitchen and the freshness of ingredients. We treat the digital interface as a high-end menu—bold, urgent, and irresistibly appetite-focused. By utilizing extreme typographic scales and "borderless" containers, we create a flow that feels as fast as the service it represents.

---

## 2. Colors & Atmospheric Depth
While the palette is rooted in high-energy reds and oranges, the application must be disciplined to maintain a premium feel.

*   **Primary Kineticism:** Use `primary` (#ba0027) for core brand moments and `primary-container` (#ff7577) for large-scale energetic backgrounds. 
*   **The "No-Line" Rule:** To ensure a custom, high-end feel, **1px solid borders are strictly prohibited for sectioning.** Do not use lines to separate content. Boundaries must be defined through background color shifts. For example, a card using `surface-container-lowest` (#ffffff) should sit on a background of `surface` (#f9f6f5).
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers.
    *   **Base:** `surface` (#f9f6f5)
    *   **In-Page Sections:** `surface-container-low` (#f3f0ef)
    *   **Floating Elements/Cards:** `surface-container-lowest` (#ffffff)
*   **The "Glass & Gradient" Rule:** To avoid a flat, "out-of-the-box" appearance, primary CTAs should utilize a subtle linear gradient from `primary` (#ba0027) to `primary-dim` (#a30021). For floating navigation or "Order Now" bars, apply a Glassmorphism effect using `surface` at 80% opacity with a 16px backdrop blur.

---

## 3. Typography: Editorial Urgency
Typography is the primary driver of the "Kinetic" brand personality. We use a high-contrast scale to create an information hierarchy that feels curated.

*   **Headlines (Epilogue):** These are our "shout" moments. Use `display-lg` for hero headlines with tight letter-spacing (-0.02em). This font choice provides a structured, modern, and slightly aggressive appetite-focus.
*   **Body (Be Vietnam Pro):** This is our "utility" font. It is geometric and clean, ensuring that even at `body-sm`, ingredient lists and nutritional info remain legible.
*   **Hierarchy as Identity:** Always pair a `display-sm` headline with `body-md` text to create a dramatic "Big/Small" contrast. This asymmetry is what makes the layout feel custom rather than templated.

---

## 4. Elevation & Depth
We achieve hierarchy through **Tonal Layering** rather than traditional structural lines or heavy shadows.

*   **The Layering Principle:** Depth is created by "stacking" the surface tiers. A `surface-container-lowest` card on a `surface-container-low` background creates a soft, natural lift that feels like fine paper.
*   **Ambient Shadows:** For high-priority floating elements (like a "View Cart" FAB), use an extra-diffused shadow: `Offset: 0, 12px; Blur: 32px; Color: rgba(186, 0, 39, 0.08)`. Note the use of a tinted shadow (primary) rather than neutral black to keep the UI "warm."
*   **The "Ghost Border" Fallback:** If a boundary is strictly required for accessibility, use the `outline-variant` (#afadac) at **15% opacity**. This creates a "suggestion" of a container without breaking the fluid editorial flow.

---

## 5. Components

### Buttons & Interaction
*   **Primary Button:** Uses `primary` (#ba0027) with `on-primary` (#ffefee) text. Roundedness: `full` (9999px) to emphasize the "friendly but fast" feel.
*   **Secondary/Action:** Uses `secondary-container` (#ffc6a0) with `on-secondary-container` (#733700). This provides high energy without the "stop" signal of red.
*   **States:** On hover, primary buttons should shift to `primary-dim` (#a30021) and scale slightly (1.02x) to provide haptic-like feedback.

### The "Appetite" Card
*   **Rule:** Forbid the use of divider lines within cards. 
*   **Structure:** Use vertical white space (referencing the 24px `lg` or 16px `md` spacing scale) to separate the image from the title. 
*   **Visuals:** Images should bleed to the edges of the card or use a "floating" shadow-play to appear 3D. 

### Chips & Selection
*   **Style:** Use `surface-container-high` (#e4e2e1) for unselected states and `secondary` (#914700) for selected states. 
*   **Roundedness:** Always `md` (0.75rem) to differentiate from the `full` pill-shape of buttons.

### Input Fields
*   **Design:** Use a "filled" style with `surface-container-highest` (#dfdcdc) backgrounds. 
*   **Active State:** The indicator should be a 2px bottom-bar of `primary` (#ba0027), avoiding a full-surround border to keep the "No-Line" rule intact.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace white space. High energy comes from the *contrast* between bold elements and breathing room.
*   **Do** use asymmetrical image placement (e.g., a burger cropping off the right edge of the screen) to imply motion.
*   **Do** use `primary-fixed` (#ff7577) for smaller accents to ensure they don't get lost in the white space.

### Don’t:
*   **Don’t** use 100% black text. Use `on-surface` (#2f2f2e) for a softer, more premium readability.
*   **Don’t** use the `DEFAULT` (0.5rem) corner radius for everything. Mix `xl` (1.5rem) for large containers and `full` for interactive elements to create visual rhythm.
*   **Don’t** use dividers to separate list items. Use a background shift to `surface-container-low` on every second item, or simply increase vertical padding.