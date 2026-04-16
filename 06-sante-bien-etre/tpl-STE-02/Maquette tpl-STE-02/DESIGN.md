# Design System Strategy: The Architectural Healing Approach

## 1. Overview & Creative North Star: "Clinical Precision, Human Warmth"
This design system moves away from the sterile, rigid grids of traditional medical portals. Our Creative North Star is **"Clinical Precision, Human Warmth."** We treat the digital canvas not as a flat screen, but as an editorial space where information breathes. 

To break the "template" look, we utilize **intentional asymmetry**. Hero sections should feature overlapping elements—such as a high-resolution medical professional portrait breaking the container of a `surface-container-low` background. By using high-contrast typography scales (the massive `display-lg` against the refined `body-md`), we establish an authoritative yet approachable presence. The goal is a layout that feels curated, not generated.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
Our palette transitions from the authoritative depths of `primary` (#002645) to the energetic clarity of `secondary` (#00677d).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. We achieve structure through:
*   **Background Shifts:** Transition from `surface` (#f7f9fc) to `surface-container-low` (#f2f4f7) to denote a new content block.
*   **Tonal Transitions:** Using subtle shifts in the surface hierarchy to separate the header from the hero, or the sidebar from the main feed.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Base:** `surface` (#f7f9fc).
*   **Sections:** `surface-container-low` (#f2f4f7) for large content areas.
*   **Cards/Modules:** `surface-container-lowest` (#ffffff) to provide "pop" and focus.
*   **Interaction Layers:** `surface-bright` for hover states or active focus.

### The "Glass & Gradient" Rule
To elevate the "Clinika" experience, use **Glassmorphism** for floating navigation bars or appointment modals. Use `surface_container_lowest` at 80% opacity with a `24px` backdrop blur. 
*   **Signature Textures:** Apply a linear gradient from `primary` (#002645) to `primary_container` (#1a3c5e) on hero backgrounds to provide a sense of "Medical Excellence" that a flat hex code cannot convey.

---

## 3. Typography: Editorial Authority
We pair the structural weight of **Manrope** (Headings) with the high-legibility "humanist" touch of **Plus Jakarta Sans** (Body).

*   **Display (Manrope):** Used for "Value Propositions." The wide aperture of Manrope communicates transparency and modernism.
*   **Body (Plus Jakarta Sans):** Chosen for its slightly larger x-height, ensuring medical information is accessible and easy to digest at `1rem`.
*   **The Hierarchy Strategy:** We use `display-lg` for impactful headers to create a "Signature Editorial" feel, while `label-md` in all-caps with `0.05em` letter-spacing is used for medical categories (e.g., "CARDIOLOGY") to provide a disciplined, professional cadence.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often "dirty." We use light to heal the interface.

*   **The Layering Principle:** Instead of an "Outer Glow," lift a `surface-container-lowest` card by placing it on a `surface-container-high` background. The color contrast provides the "lift."
*   **Ambient Shadows:** When a float is required (e.g., an emergency CTA), use: `0 12px 32px rgba(25, 28, 30, 0.04)`. Note the use of `on-surface` (#191c1e) as the shadow base rather than pure black.
*   **The "Ghost Border" Fallback:** If a border is required for input fields, use `outline-variant` (#c3c6cf) at **20% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use `surface-variant` with a 60% opacity for "Medical Resource" cards to let the background brand colors bleed through softly, softening the clinical edge.

---

## 5. Components: The Refined Toolkit

### Buttons
*   **Primary:** Solid `secondary` (#00677d) with `on-secondary` (#ffffff) text. Use `DEFAULT` (8px) roundedness. Apply a subtle gradient from `secondary` to `secondary_container` for a premium feel.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Tertiary:** Transparent background, `on-tertiary-container` (#00b3d7) text, bold weight.

### Input Fields
*   **Style:** Minimalist. No bottom line or heavy box. Use a `surface-container-low` fill with a `sm` (4px) corner radius. On focus, transition the background to `surface-container-lowest` and apply a "Ghost Border" of `secondary`.

### Cards & Lists
*   **The Divider Forbid:** Do not use horizontal lines. Separate list items using `16px` of vertical whitespace or by alternating background tints (`surface-container-low` vs `surface-container-lowest`).
*   **Doctor Profile Cards:** Use `xl` (24px) rounding for the container but `md` (12px) for the internal image to create a sophisticated "nested" radius look.

### Specialized Components
*   **The "Trust Badge":** Small `surface-container-highest` chips with `label-sm` text to highlight certifications.
*   **Booking Sticky Bar:** A glassmorphic `surface-container-lowest` bar at the bottom of the mobile view to keep "Book Appointment" always accessible without cluttering the UI.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use 80px - 120px of vertical padding between major sections to emphasize high-end medical care.
*   **Do** use "Plus Jakarta Sans" for all numerical data (phone numbers, prices) for maximum clarity.
*   **Do** use the `secondary` (#00677d) color for "Life-affirming" actions like "Start Consultation."

### Don't:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#191c1e) to maintain a soft, premium feel.
*   **Don't** use "flat line icons" in a vacuum. Place them inside a `secondary-fixed` (#b3ebff) circular container at 20% opacity to give them weight.
*   **Don't** center-align long blocks of text. Keep medical descriptions left-aligned for an editorial, trustworthy structure.