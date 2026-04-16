```markdown
# Design System Strategy: High-Contrast Editorial

## 1. Overview & Creative North Star: "The Neon Brutalist"
This design system rejects the "soft and safe" aesthetic common in the beauty industry. Instead, it adopts a **Neon Brutalist** North Star—a high-energy, editorial approach that treats the digital screen like a premium fashion monograph. 

We move beyond the template look by using **intentional asymmetry**, **sharp 0px radius edges**, and **aggressive typographic scaling**. The layout doesn't just sit on the grid; it commands it through a "Z-axis" of depth created by tonal layering and "Glassmorphism," ensuring the fuchsia accents feel like light emitting from the screen rather than mere paint on a page.

---

## 2. Colors & Surface Logic

### The Palette
The core of this system is the tension between the clinical purity of the whites and the "electric" vibration of the primary fuchsia.

*   **Primary (`#b70049`):** Our signature energy. Use it sparingly for maximum impact.
*   **Surface (`#f9f6f5`):** A warm, high-end white that prevents the "stark hospital" feel.
*   **On-Surface (`#2f2e2e`):** A deep charcoal. Avoid pure #000000 to maintain editorial sophistication.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. 
*   Boundaries must be defined solely through background shifts. 
*   *Example:* A navigation bar should not have a bottom border; it should transition from `surface` to `surface-container-low`.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, high-end paper sheets. Use `surface-container` tiers to create depth:
*   **Base Layer:** `surface` (#f9f6f5)
*   **Secondary Content Blocks:** `surface-container-low` (#f3f0ef)
*   **High-Priority Cards:** `surface-container-lowest` (#ffffff) for a "pop-out" effect.

### The "Glass & Gradient" Rule
To elevate the "trendy" aesthetic, use Glassmorphism for floating navigation or overlays. Use semi-transparent `surface` colors with a `20px` backdrop-blur. For hero CTAs, apply a subtle linear gradient from `primary` (#b70049) to `primary-container` (#ff7290) at a 135-degree angle to add "soul" and dimension.

---

## 3. Typography: The Editorial Voice

We utilize a high-contrast pairing: **Epilogue** for authoritative headlines and **Inter** for functional clarity.

*   **Display (Epilogue, Bold):** Large-scale sizes (`display-lg` at 3.5rem) should be used with tight letter-spacing (-2%) to mimic high-fashion magazines.
*   **Headlines (Epilogue, Bold):** Use `headline-lg` for section headers. These are the anchors of your visual hierarchy.
*   **Body (Inter, Regular):** Optimized for readability. Use `body-lg` (1rem) for service descriptions to maintain a premium feel.
*   **Labels (Inter, Semi-Bold):** Uppercase labels with increased letter-spacing (+5%) should be used for categories or eyebrow text to add structural rigor.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "software-like" for a beauty brand. We use **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The subtle shift from #f3f0ef to #ffffff creates a "soft lift" that feels architectural.
*   **Ambient Shadows:** If a floating element (like a booking modal) is required, use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(47, 46, 46, 0.06)`. Note the use of the `on-surface` tint rather than black.
*   **The "Ghost Border" Fallback:** If a container needs more definition, use the `outline-variant` (#afacac) at **15% opacity**. Never 100%.

---

## 5. Components

### Buttons
*   **Primary:** Sharp 0px corners. Background: `primary`. Text: `on-primary` (#ffeff0). On hover, transition to `primary-dim`.
*   **Secondary:** Sharp 0px corners. Background: Transparent. Border: `Ghost Border` (outline-variant @ 20%).
*   **Tertiary:** All caps, bold `Inter`. No container. Use a `primary` color underline that expands on hover.

### Input Fields
*   **Style:** Minimalist. No four-sided boxes. Use a bottom-only line (2px) using `outline-variant`.
*   **Active State:** Line transitions to `primary`. Label shifts to `label-sm` in `primary` color.
*   **Error State:** Line and helper text use `error` (#b41340).

### Cards & Lists
*   **Constraint:** Zero dividers. Use vertical whitespace (32px or 48px) to separate list items.
*   **Interaction:** On hover, a card should shift from `surface-container-low` to `surface-container-lowest` to signal interactivity without moving the pixel position.

### Additional Signature Components
*   **The "Price Tag" Chip:** A sharp-edged `primary-container` box with `on-primary-container` text. Positioned overlapping the top-right corner of service images.
*   **Full-Bleed Imagery:** Use high-resolution photography that breaks the grid, occasionally overlapping text elements to create a layered, "collage" feel.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use 0px border-radius everywhere. Sharp edges convey precision and modern luxury.
*   **Do** use asymmetrical margins. For example, a headline might be indented 10% more than the body text to create a dynamic "editorial" flow.
*   **Do** prioritize whitespace. If a section feels crowded, double the padding.

### Don't:
*   **Don't** use rounded corners, even for checkboxes.
*   **Don't** use standard "Grey" for text. Use `on-surface-variant` (#5c5b5b) to maintain the tonal warmth of the system.
*   **Don't** use 1px solid black borders. They break the premium "surface-on-surface" illusion.
*   **Don't** use icons without purpose. Only use highly-refined, thin-stroke (1.5px) icons that match the `secondary` color.

---
*Document end. Follow these principles to ensure the design remains intentional, high-energy, and unmistakably premium.*```