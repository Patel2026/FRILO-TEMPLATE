# Design System Strategy: The Electric Sanctuary

## 1. Overview & Creative North Star
The design system is anchored by the Creative North Star: **"The Electric Sanctuary."** This is a philosophy of contrast—where the raw, chaotic energy of a neon nightlife pulse meets the refined, silent exclusivity of a VIP lounge. 

To move beyond the "template" look, we abandon the standard rigid grid in favor of **Intentional Asymmetry**. This system uses generous whitespace (the "Void") to allow high-impact typography and glass elements to breathe. We treat the interface as a physical space; elements shouldn't just sit on the screen—they should emerge from the darkness or float within it. By overlapping large-scale display type with translucent containers, we create an editorial depth that feels curated, not just programmed.

---

## 2. Colors & Surface Philosophy
This system is built on a "Total Black" foundation (`background: #0e0e0e`), using light not just as decoration, but as a structural tool.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through background shifts. 
*   Use `surface-container-low` to sit on top of the `surface` base. 
*   For sectioning, allow the transition from `#0e0e0e` to `#131313` (Surface Container Low) to create a soft, sophisticated break that maintains the "Sleek & Atmospheric" vibe.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, semi-translucent layers. 
*   **Base:** `surface` (#0e0e0e)
*   **Layer 1:** `surface-container-low` (#131313) for secondary content areas.
*   **Layer 2 (The Interactive Layer):** `surface-container-high` (#201f1f) for cards and modals.
*   **Layer 3 (The Focus Layer):** `surface-bright` (#2c2c2c) for active states or elevated floating elements.

### The Glass & Gradient Rule
To achieve the "Electric" aspect of the Sanctuary, use Glassmorphism for floating UI (Modals, Navigation Bars).
*   **Token Usage:** Combine `surface-variant` at 40% opacity with a `backdrop-blur` of 20px. 
*   **Signature Textures:** Main CTAs should never be flat. Use a linear gradient from `primary` (#e08dff) to `primary-dim` (#bc00fb) at a 135-degree angle to provide a "neon tube" glow effect.

---

## 3. Typography
Typography is our primary vehicle for "High-End Editorial" vibes. We pair the tech-forward, sharp character of **Space Grotesk** with the clean, rhythmic sophistication of **Manrope**.

*   **Display (Space Grotesk):** Use `display-lg` (3.5rem) for hero statements. It should feel massive and unapologetic. Use negative letter-spacing (-0.02em) to create a "tight," premium feel.
*   **Headline (Space Grotesk):** `headline-lg` through `headline-sm` are used for section entries. These should often be placed asymmetrically, perhaps bleeding off a container edge.
*   **Body (Manrope):** `body-lg` (1rem) is our workhorse. Manrope’s geometric nature complements the display font while ensuring legibility in low-light (dark mode) environments.
*   **Labels (Manrope):** Use `label-md` in all-caps with increased letter-spacing (0.1em) for "Category" tags or "Status" indicators to mimic high-fashion mastheads.

---

## 4. Elevation & Depth
In "The Electric Sanctuary," depth is achieved through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-highest` card on a `surface` background. The subtle shift in grey-tone provides a natural, sophisticated lift.
*   **Ambient Shadows:** If an element must float (e.g., a "Book Now" FAB), use an extra-diffused shadow. 
    *   *Color:* Use a 10% opacity version of `primary` (#e08dff) or `secondary` (#f5ce53) rather than black. This creates a "glow" rather than a "shadow," simulating the way neon lights interact with dark surfaces.
*   **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use a "Ghost Border." Apply `outline-variant` (#494847) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary-dim`. No border. Text is `on-primary-fixed` (Black) for maximum contrast.
*   **Secondary:** `outline` token at 20% opacity with `secondary` (#f5ce53) text. On hover, the button should "fill" with a subtle gold glow.
*   **Tertiary:** Text-only using `secondary` for a sophisticated, understated action.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines to separate list items. Use vertical padding (Spacing Scale) and a `surface-container-low` hover state to define rows.
*   **The "Vibe" Card:** Use `xl` (0.75rem) corner radius. The background should be a glassmorphic `surface-container-high`.

### Input Fields
*   **Static State:** No box. Just a `surface-container-highest` bottom-border (2px).
*   **Active State:** The bottom border transforms into a `secondary` (Gold) gradient. The label floats and changes to `primary` (Purple).

### Signature Component: The Glow-Chip
*   For event tags (e.g., "Sold Out", "VIP Only"). A small chip using `error_container` with a subtle outer glow of `error_dim` to simulate a warning light in a dark club.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace the Dark:** Keep at least 60% of the screen in the `surface` or `surface-dim` range.
*   **Use Gold for Precision:** Use `secondary` (#f5ce53) for small, high-value details like price points, timestamps, or gold-standard ratings.
*   **Asymmetric Grids:** Offset your imagery. If text is left-aligned, let the accompanying image sit slightly lower and to the right, breaking the container bounds.

### Don't:
*   **Don't use Pure White for Body Text:** Use `on-surface-variant` (#adaaaa) for long-form text to reduce eye strain against the black background; reserve pure white (`on-surface`) for headings.
*   **Don't use Standard Shadows:** Avoid the "fuzzy black" shadow. If it doesn't glow, it doesn't belong.
*   **Don't Crowd the Sanctuary:** If a screen feels busy, remove a container border and increase the padding. Space is the ultimate luxury.

---