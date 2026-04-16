# Design System Strategy: The Botanical Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Artisanal Conservatory"**
This design system moves away from the sterile, clinical nature of traditional beauty interfaces. Instead, it adopts the persona of a high-end botanical journal. We are building a "Digital Conservatory"—a space that feels curated, breathing, and tactile. 

To break the "standard template" feel, this system leans into **intentional asymmetry**. Layouts should mimic a Sunday morning farmer’s market—structured yet organic. We achieve this through overlapping elements (e.g., a botanical illustration bleeding behind a card), high-contrast typography scales, and a departure from rigid containment in favor of "floating" editorial compositions.

---

## 2. Colors: The Earth-Tone Palette
Our palette is rooted in the earth, utilizing Material Design logic to create a sophisticated, layered atmosphere.

### Core Token Implementation
*   **Primary (`#94451a`):** Our Terracotta accent. Used for high-intent actions and brand-defining moments.
*   **Secondary (`#4e644a`):** Deep Moss. Used for grounding large sections and providing a "greenhouse" depth.
*   **Surface (`#fef9f0`):** Warm Linen. The master canvas. It is warmer than pure white, reducing eye strain and feeling more "paper-like."

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections. Boundaries must be established through color shifts.
*   A section transition should occur by moving from `surface` to `surface-container-low` (#f8f3ea) or `secondary-container` (#d1eac8). 
*   This creates a "soft-edge" layout that feels like stacked sheets of handmade paper rather than a digital wireframe.

### Glass & Gradient Soul
To ensure the UI feels "premium," use **Glassmorphism** for navigation bars and floating modals. Use the `surface` color at 70% opacity with a `20px` backdrop-blur. 
*   **Signature Gradient:** For primary CTAs, use a subtle linear gradient from `primary` (#94451a) to `primary_container` (#b35c30) at a 135-degree angle. This adds a "fired clay" dimension that flat hex codes lack.

---

## 3. Typography: The Editorial Voice
Our typography is a conversation between the structured and the handmade.

*   **Display (Noto Serif):** Our "Recoleta-style" surrogate. These should be set with tight letter-spacing (-2%) to feel high-fashion and editorial. Use `display-lg` for hero moments to anchor the page.
*   **Handwritten Labels (Satisfy/Caveat style):** Use these for "micro-copy" or category tags. Always set in `primary` (Terracotta) to act as a brush-stroke highlight. They should often be placed at a slight 3-degree tilt to break the horizontal axis.
*   **Body (Plus Jakarta Sans):** Chosen for its warmth and readability. Set in `on_surface_variant` (#55433b) to maintain a soft, brown-toned legibility rather than a harsh black.

---

## 4. Elevation & Depth: Tonal Layering
We reject the drop-shadow defaults of the early 2010s. Depth in this system is "Naturalistic."

*   **The Layering Principle:** Stack `surface-container` tiers. A `surface-container-highest` card (#e7e2d9) placed on a `surface` background (#fef9f0) provides all the visual separation required.
*   **Ambient Shadows:** If an element must "float" (like a floating action button), use a shadow color derived from `on_surface` at 5% opacity with a `40px` blur and `10px` Y-offset. It should look like a leaf casting a shadow on a table, not a glowing light.
*   **The "Ghost Border":** For input fields, use `outline_variant` at 20% opacity. This creates a "suggestion" of a container that respects the organic aesthetic.

---

## 5. Components

### Buttons & Interaction
*   **Primary Button:** Fixed `40px` (2.5rem) corner radius. Background: `primary` gradient. Text: `on_primary`. 
*   **Secondary Button:** `surface-container-highest` background with `primary` text. No border.
*   **Interactive State:** On hover, buttons should scale by 1.02% rather than just changing color, mimicking a tactile press.

### Cards & Surfaces
*   **Construction:** Use `20px` (1.25rem) corner radius. 
*   **Constraint:** **Never use dividers.** To separate a card header from its body, use a slight vertical spacing increase (e.g., 24px) or a background shift to a nested `surface-container-low`.
*   **Texture:** Large cards should feature a subtle "Paper Grain" overlay at 3% opacity to maintain the "Botanical Journal" feel.

### Inputs & Selection
*   **Text Fields:** Use "Soft Fill" styling. Background `surface-container-high` with a bottom-only border in `primary` (2px) appearing only on focus.
*   **Chips:** Use `secondary_fixed` (#d1eac8) for unselected states. These should look like small, smoothed river stones.

### Signature Component: "The Botanical Divider"
Instead of a horizontal line, use organic SVG wave dividers or a "scatter" of botanical illustrations (lavender/rosemary) to transition between high-contrast color sections (e.g., transitioning from `surface` to `secondary` dark moss).

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace White Space:** Give elements 20% more "breathing room" than you think they need.
*   **Asymmetric Imagery:** Place images off-center. Let a botanical illustration overlap the edge of a text container.
*   **Tonal Hierarchy:** Use `on_surface_variant` for secondary text to keep the "Warm Dark Brown" vibe consistent.

### Don’t:
*   **Don’t use 100% Black:** Never use `#000000`. Use `on_surface` (#1d1c16) for high-contrast text.
*   **Don’t use sharp corners:** Even "sharp" elements should have at least a `4px` radius. 
*   **Don’t use "Default" Shadows:** Avoid the "Material Design" standard shadow. It is too "tech-heavy" for a greenhouse aesthetic.
*   **Don’t use Grid-Lock:** Avoid making every column the exact same width. Let the content dictate a more varied, editorial rhythm.