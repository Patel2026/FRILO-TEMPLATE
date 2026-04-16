# Design System Document: High-End Corporate Editorial

## 1. Overview & Creative North Star
### The Creative North Star: "The Architectural Curator"
This design system is built to move beyond the "standard corporate template." While the industry demands reliability and structure, a high-end experience must also convey a sense of curated authority and bespoke craft. We achieve this through "The Architectural Curator" lens—a philosophy where the UI acts as a gallery space: structured, quiet, yet undeniably premium.

The system breaks away from generic layouts by utilizing **intentional asymmetry** and **tonal depth**. Rather than boxing content into rigid rows, we use overlapping elements and generous whitespace to create an editorial feel, similar to a high-end business journal or an architectural monograph.

## 2. Colors
Our palette is a study in tonal sophistication. We move beyond flat color applications to create a sense of environment and light.

*   **Primary Anchor:** We use `primary` (#002045) and `primary_container` (#1a365d) to establish authority. These deep blues should feel like a custom-tailored suit—weighty and impeccable.
*   **The "No-Line" Rule:** To maintain a high-end feel, **do not use 1px solid borders to separate sections.** Visual boundaries must be defined solely through background shifts. For example, a content section on `surface` (#f5faff) should transition into a footer or sidebar using `surface_container_low` (#eff4f9).
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers.
    *   **Base:** `surface`
    *   **Secondary Context:** `surface_container`
    *   **Interactive/Elevated Context:** `surface_container_lowest` (White)
    *   **Nesting:** Place `surface_container_lowest` cards on a `surface_container_low` background to create a "soft lift" without a single line of CSS border.
*   **The "Glass & Gradient" Rule:** For hero sections or high-impact CTAs, use a subtle linear gradient from `primary` to `primary_container`. For floating navigation or over-image elements, apply a "frosted glass" effect using semi-transparent `surface_variant` with a 20px backdrop-blur.
*   **Signature Textures:** Use `on_surface_variant` at 5% opacity for subtle, large-scale background patterns (e.g., geometric grid dots) to add "soul" to expansive whitespace.

## 3. Typography
The typography strategy leverages a dual-typeface system to balance modern efficiency with editorial flair.

*   **Display & Headlines (Manrope):** We use Manrope for all `display` and `headline` tokens. Its geometric yet humanist qualities feel modern and expensive. Use `display-lg` for hero statements with a slightly tighter letter-spacing (-0.02em) to command attention.
*   **Title & Body (Inter):** Inter is our workhorse. It provides maximum legibility for event details and corporate data.
*   **Hierarchy as Identity:** 
    *   **Contrast:** Pair a `display-md` headline with a `body-md` description to create a dramatic scale ratio. This contrast is the hallmark of premium design.
    *   **Labels:** Use `label-md` in all-caps with +0.05em tracking for category tags or overline text to evoke a sense of professional classification.

## 4. Elevation & Depth
In this design system, depth is felt, not seen. We avoid heavy drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking" surface-container tiers. Placing a white card (`surface_container_lowest`) on a light gray base (`surface_container_low`) provides a natural, soft lift that mimics fine stationery.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, it must be an "Ambient Shadow." Use the `on_surface` color as the shadow tint at 6% opacity, with a 32px blur and 16px Y-offset. This mimics natural light rather than a digital effect.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a "Ghost Border"—using `outline_variant` at 15% opacity. Never use 100% opaque borders.
*   **Glassmorphism:** Use semi-transparent layers for elements that sit atop photography. This allows the "vibrancy" of the event photography to bleed through the UI, making the interface feel integrated with the content.

## 5. Components

### Buttons
*   **Primary:** A solid `primary` fill with `on_primary` text. Corners are set to `md` (0.375rem) for a modern, sharp-yet-approachable look. 
*   **Secondary:** No fill. Use a `surface_container_high` background shift on hover.
*   **Tertiary:** Text-only with an underline that appears on hover, utilizing the `primary_fixed` color.

### Input Fields
*   **Styling:** Inputs use `surface_container_highest` as a background with no border. Upon focus, transition to a `primary` "Ghost Border" (20% opacity).
*   **Labels:** Floating labels using `label-md` to ensure the layout remains clean and organized.

### Cards & Lists
*   **The Rule of Zero Lines:** Forbid the use of divider lines between list items. Instead, use 16px or 24px of vertical whitespace (per the spacing scale) or a subtle `surface_container_low` hover state.
*   **Event Cards:** Use an asymmetrical layout—place the image on a 60% width and let the text content "hang" slightly into the margin of the next grid column.

### Chips
*   **Filter Chips:** Use `secondary_container` with `on_secondary_container` text. Use `full` (9999px) roundedness to contrast against the sharper `md` corners of buttons.

### Specialized Component: The "Event Ledger"
A bespoke list component for event schedules. It uses a thick 4px vertical accent of `primary` on the left of the active session, with all other sessions separated by simple vertical breathing room. No horizontal lines.

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical image placements to break the "grid-template" feel.
*   **Do** lean heavily on `surface_container` shifts to define content blocks.
*   **Do** use high-quality, candid photography of networking (blurred backgrounds, focus on human connection) rather than staged stock photos.
*   **Do** ensure a minimum of 80px padding between major vertical sections.

### Don't
*   **Don't** use 1px solid borders for sectioning or card containment.
*   **Don't** use standard "drop shadows" with black or dark gray (#000) tints.
*   **Don't** use more than one "Primary" CTA per view; use "Tertiary" buttons for secondary actions to maintain hierarchy.
*   **Don't** crowd the layout. If an element feels "stuck," add 16px of whitespace.

---
*End of Design System Document*