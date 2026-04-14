# Design System Document: The Soft-Artesian Framework

## 1. Overview & Creative North Star: "The Modern Workshop"
The "Creative North Star" for this design system is **The Modern Workshop**. This philosophy rejects the cold, rigid, and metallic tropes of the construction industry in favor of a warm, editorial-style experience that feels human-centric and tactile.

To break the "standard template" look, we employ **Soft Minimalism**. We replace harsh structural lines with expansive white space, exaggerated corner radii, and a "nested" layout strategy. By using intentional asymmetry—such as offset image compositions and overlapping text blocks—we transform a simple construction site into a premium digital gallery. The goal is to move the user from a "utility" mindset to an "aspiration" mindset.

---

## 2. Colors: Tonal Depth & Soul
We avoid the "flat" look by utilizing a sophisticated range of Material-inspired tokens. Our vibrant accents are tempered by a warm, organic base.

### Color Strategy
- **Primary (#964900/Primary Container #F57C00):** Represents the raw materials—timber, clay, and earth. Used for high-action triggers.
- **Secondary (#005FAF/Secondary Container #54A0FE):** Represents precision and clarity. Used for supportive actions and trust-building elements.
- **Surface & Background (#FFF8F5):** A warm, off-white "linen" base that feels more premium and welcoming than pure white.

### The Rules of Engagement
- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Separation must be achieved through background shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to define a boundary.
- **Surface Hierarchy & Nesting:** Treat the UI as stacked sheets of fine paper. An outer container might use `surface-container-lowest`, while a featured card inside it uses `surface-bright` to "pop" forward.
- **The "Glass & Gradient" Rule:** To provide "soul," use subtle linear gradients on primary CTAs (moving from `primary` to `primary-container`). For floating navigation bars or overlays, use **Glassmorphism**: `surface` color at 70% opacity with a `24px` backdrop-blur.
- **Signature Textures:** Use the `primary-fixed-dim` for subtle background shapes or oversized, low-opacity iconography to add layers of professional polish.

---

## 3. Typography: Editorial Authority
We pair **Plus Jakarta Sans** (Display/Headlines) with **Inter** (Body/Labels) to balance character with extreme legibility.

- **Display & Headlines (Plus Jakarta Sans):** These are our "hero" moments. Use `display-lg` with tight letter-spacing for a confident, editorial impact.
- **Body & Titles (Inter):** Inter provides a neutral, high-legibility counter-balance. It ensures that technical details and construction quotes remain accessible to all users.
- **The Contrast Rule:** Always maintain at least two scale jumps between a headline and its subtext (e.g., `headline-lg` paired with `body-md`) to create a clear visual hierarchy that feels intentional and high-end.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, "depth" is a feeling, not a shadow.

- **The Layering Principle:** Stacking tiers is the primary way to show importance.
  - **Level 0 (Base):** `surface`
  - **Level 1 (Section):** `surface-container-low`
  - **Level 2 (Card):** `surface-container-lowest` (White)
- **Ambient Shadows:** When an element must float (e.g., a "Get a Quote" modal), use a shadow tinted with `on-surface`. 
  - *Spec:* `0px 20px 40px rgba(36, 25, 18, 0.06)`. This mimics soft, natural sunlight.
- **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use a `1px` stroke of `outline-variant` at **15% opacity**. This creates a "suggestion" of a boundary without the weight of a line.
- **Corner Radii:** Our signature. Every container, image, and button must utilize the **lg (2rem/32px)** or **xl (3rem/48px)** tokens. This "pill-style" softening is non-negotiable—it is the visual shorthand for "friendly and modern."

---

## 5. Components: Soft-Touch Primitive
Every component must feel "touchable" and approachable.

- **Buttons:** 
  - **Primary:** `primary` background, `on-primary` text, `xl` (48px) radius. Use a subtle gradient.
  - **Tertiary:** No background. Use `primary` text with a `surface-container` hover state.
- **Cards & Lists:** 
  - **The Divider Ban:** Never use horizontal rules. Separate list items using `16px` of vertical white space or by placing each item in a `surface-container-low` rounded box.
  - **Images:** All images must have an `xl` (32px) border-radius and, where possible, an asymmetrical aspect ratio (e.g., 4:5 for a "tall" editorial feel).
- **Input Fields:** 
  - Use `surface-container-highest` for the field background with no border. On focus, transition the background to `surface-container-lowest` and add a `2px` ghost border in `primary`.
- **Progressive Chips:** 
  - Use `secondary-fixed` for background and `on-secondary-fixed` for text. These should be fully rounded (`full` token) to act as soft visual anchors.

---

## 6. Do's and Don'ts

### Do
- **Do** use whitespace as a structural element. If a section feels crowded, double the padding.
- **Do** use "nested" radii. If an outer container is `32px`, the inner card should be `24px` to create a harmonious concentric flow.
- **Do** use high-quality, warm-toned photography of artisans and finished textures.

### Don't
- **Don't** use black (`#000000`). Use `on-surface` (#241912) for text to maintain the "warm workshop" feel.
- **Don't** use sharp corners. Any radius under `16px` is considered a bug.
- **Don't** use traditional industrial "caution" patterns or heavy shadows. We are building homes and trust, not factory floors.
- **Don't** use center-alignment for long-form text. Keep it left-aligned for an editorial, structured look.