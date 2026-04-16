```markdown
# Design System Document: The Editorial Aura

## 1. Overview & Creative North Star
**Creative North Star: "The Silent Curator"**

This design system is not a mere collection of components; it is a digital sanctuary. We move away from the "app-like" density of traditional interfaces to embrace the "Digital Magazine" aesthetic. The goal is to evoke the feeling of flipping through a high-end fashion editorial where the negative space is as important as the content itself. 

To achieve this, we reject the rigid, boxed-in nature of standard web design. We utilize **intentional asymmetry**, where images and text blocks overlap slightly to create depth, and we prioritize **rhythmic whitespace** over information density. Every interaction should feel like a deliberate, slow-motion transition in a luxury boutique.

---

## 2. Colors & Tonal Depth
Our palette is rooted in a "Noble Neutral" foundation, punctuated by the authority of deep blacks and the warmth of metallic gold.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning. 
Boundaries must be defined through tonal shifts. A `surface-container-low` section should sit against a `surface` background to denote a change in context. If you feel the need to draw a line, instead add 40px of `vertical-space`.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine vellum and heavy-stock paper.
*   **Base:** `surface` (#faf9f7) — The primary canvas.
*   **Elevated Content:** Use `surface-container-lowest` (#ffffff) for primary cards to create a subtle "lift" against the beige base.
*   **Deep Recesses:** Use `surface-dim` (#dadad8) for footers or utility areas to ground the experience.

### The "Glass & Gold" Rule
To elevate the "Metallic Gold" (`secondary` #775a19) beyond a flat hex code, use it sparingly for interactive highlights and accents. For floating navigation or overlays, implement **Glassmorphism**:
*   **Background:** `surface` at 70% opacity.
*   **Effect:** `backdrop-blur: 20px`.
*   **Edge:** A "Ghost Border" using `outline-variant` (#d1c5b4) at 15% opacity to catch the light.

---

## 3. Typography
The tension between the high-contrast Serif and the functional Sans-Serif creates the "Editorial" signature.

*   **Display & Headlines (Noto Serif):** These are your "Hero" elements. Use `display-lg` with generous letter-spacing (tracking: -0.02em) to create an authoritative, sophisticated presence. Headlines should often be centered or intentionally offset to break the grid.
*   **Titles & Body (Manrope):** This sans-serif provides the "Clinical Excellence" of the beauty institute. It is clean, modern, and highly legible. 
*   **Hierarchy Note:** Always pair a `display-md` serif headline with a `label-md` sans-serif sub-header in all-caps (tracking: 0.1em) to mimic luxury mastheads.

---

## 4. Elevation & Depth
We eschew "Material" shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural, soft lift.
*   **Ambient Shadows:** If a floating element (like a booking modal) requires a shadow, it must be invisible to the untrained eye. 
    *   *Values:* `box-shadow: 0 20px 40px rgba(26, 28, 27, 0.04);` (using a tinted version of `on-surface`).
*   **The "Ghost Border":** For high-end containment, use a 1px stroke of `outline-variant` at 20% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** Solid `on-secondary_fixed` (#261900) background with `secondary_fixed` (#ffdea5) text. Shape: Absolute square (`0px` radius).
*   **Secondary:** Ghost style. No background, `outline-variant` 20% opacity border, text in `on-surface`.
*   **Interaction:** On hover, primary buttons should subtly shift to a gradient transition from `secondary` to `secondary_container`.

### Cards & Lists
*   **Forbid Dividers:** Horizontal lines are replaced by `64px` of vertical padding. 
*   **Image Handling:** Images should have `0px` border-radius. Use a subtle `surface-variant` (#e3e2e0) placeholder color to maintain the "Editorial" weight before images load.

### Input Fields
*   **Style:** Minimalist underline style or soft-filled `surface-container`.
*   **Focus State:** The label (Manrope, `label-sm`) should shift to `secondary` (Gold) while the underline expands from the center. No "glow" effects.

### Signature Component: The "Editorial Reveal"
A specialized image-text lockup where the image occupies 60% of the viewport width, and the `display-md` text overlaps the image edge by 40px, set on a `surface-container-highest` background.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Align text to the left and images to the right, but allow them to "bleed" off the edge of the grid.
*   **Use Tonal Shifts:** Define sections using the `surface` tokens (Low vs. High) rather than lines.
*   **Prioritize Typography:** Let the `notoSerif` headers do the heavy lifting. If the layout feels empty, increase the font size rather than adding more "stuff."

### Don't:
*   **No Rounded Corners:** This design system uses a strict `0px` radius. Rounded corners feel "friendly" and "tech-oriented"; we are aiming for "Architectural" and "High-End."
*   **No Standard Shadows:** Avoid the "floating card" look of 2015. Use layers, not shadows.
*   **No Crowding:** If a section feels "efficient," it is likely too crowded. Add 20% more whitespace than you think is necessary.
*   **No High-Contrast Borders:** Never use `outline` at 100% opacity. It shatters the soft, luxurious illusion.```