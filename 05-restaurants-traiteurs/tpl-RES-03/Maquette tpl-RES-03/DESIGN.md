# Design System Strategy: The Culinary Curator

## 1. Overview & Creative North Star
The North Star for this design system is **"The Culinary Curator."** 

In the world of high-end catering, the experience is defined by the negative space—the pristine tablecloth, the calculated distance between silver, and the quiet confidence of a perfectly plated dish. This design system rejects the "web-template" aesthetic of boxed grids and heavy borders. Instead, it adopts an **Editorial Asymmetry**, where content is treated like a high-end lookbook. We utilize expansive white space (Ivory), sophisticated tonal layering, and high-contrast typography scales to create a digital experience that feels as curated as a five-course gala.

## 2. Colors & Surface Architecture

The palette is rooted in organic luxury, moving away from "pure" digital blacks and whites toward a more tactile, parchment-inspired foundation.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. To define a new content area, use a **Background Shift**. For example, a transition from `surface` (#faf9f5) to `surface-container-low` (#f4f4f0) provides a sophisticated boundary that feels like changing paper stock rather than drawing a box.

### Surface Hierarchy & Nesting
Depth is achieved through "Tonal Stacking."
- **Level 0 (Base):** `surface` (#faf9f5) – The primary canvas.
- **Level 1 (Sections):** `surface-container-low` (#f4f4f0) – Used for full-width content blocks.
- **Level 2 (Cards/Modules):** `surface-container-lowest` (#ffffff) – Used for interactive elements to make them "pop" against the ivory base.
- **Level 3 (Overlays):** `surface-bright` (#faf9f5) – Reserved for modals or floating navigation.

### The "Glass & Gradient" Rule
To evoke the shimmer of fine glassware, use Glassmorphism for floating elements (like the navigation bar). Apply `surface` at 80% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** For high-impact CTAs, use a subtle linear gradient from `primary` (#526049) to `primary-container` (#6a7961). This prevents the "flat" look and adds a bespoke, silk-like sheen.

## 3. Typography: The Editorial Voice

The typography is a dialogue between the classic (Noto Serif) and the contemporary (Manrope).

*   **The Display Scale (Noto Serif):** Use `display-lg` through `display-sm` for hero statements. These should be treated as art pieces. Use wide letter-spacing (-0.02em) and generous line heights to allow the serif's elegance to breathe.
*   **The Headline Scale (Noto Serif):** Headlines convey authority. They should never be crowded. Ensure a minimum of `48px` of vertical margin above any `headline-lg` element.
*   **The Body Scale (Manrope):** `body-lg` is the workhorse. Manrope's clean, geometric nature balances the serif's traditionalism.
*   **The Signature Accent:** Use `label-md` in all-caps with `0.1em` letter-spacing for category tags (e.g., "MENU," "VENUE," "LOGISTICS") to mimic high-end stationery.

## 4. Elevation & Depth

We eschew "material" drop shadows in favor of **Ambient Luminosity**.

*   **The Layering Principle:** A card should never have a shadow if a background color shift can achieve the same goal. Place a `surface-container-lowest` (#ffffff) card on a `surface-container` (#efeeea) background for a natural, soft lift.
*   **Ambient Shadows:** If a floating state is required (e.g., a menu picker), use a shadow color derived from `on-surface` (#1b1c1a) at 4% opacity with a `32px` blur and `8px` Y-offset. It should feel like a soft glow, not a dark edge.
*   **The "Ghost Border":** If a boundary is required for accessibility, use the `outline-variant` (#c5c8be) at 20% opacity. Never use a 100% opaque border.

## 5. Components

### Buttons
*   **Primary:** Filled with `primary` (#526049), text in `on-primary` (#ffffff). Shape: `md` (0.375rem). The feel should be sturdy and confident.
*   **Secondary:** `outline-variant` (#c5c8be) at 30% opacity with `primary` text. No solid fill.
*   **Tertiary:** Text-only in `secondary` (#695d3d), with a `2px` underline that appears on hover, echoing a handwritten note.

### Cards & Lists
*   **Prohibition:** Divider lines (HR tags) are forbidden. 
*   **Implementation:** Separate list items using 24px of vertical padding and a subtle shift to `surface-container-low` on hover. For culinary cards, allow the image to "break" the container—use a larger `xl` (0.75rem) rounded corner for images but a `md` (0.375rem) for the card itself to create visual tension.

### Input Fields
*   **Style:** Minimalist. Only a bottom border using `outline` (#757870) at 40% opacity. On focus, the border transitions to `secondary` (#695d3d) and the label (Manrope) floats upward with an elegant, slow ease.

### Signature Component: The "Heritage Carousel"
A bespoke component for this system: an asymmetrical slider where the active image uses a `display-sm` serif caption overlapping the edge of the photo, utilizing `surface-tint` for a subtle color wash over the image.

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Offset images from text columns by 10-15% to create a custom, editorial feel.
*   **Use Generous Padding:** If you think there is enough whitespace, add 16px more.
*   **Tint Your Neutrals:** Use the Ivory/Sage tones even in the darkest shadows to keep the palette organic.

### Don't:
*   **Don't use 100% Black:** Always use `on-surface` (#1b1c1a). Pure black is too "digital" for this brand.
*   **Don't use Default Shadows:** Avoid the "fuzzy grey" look at all costs. 
*   **Don't use Standard Grids:** Avoid the 12-column "center-everything" trap. Let content align to the left or right with significant "dead space" on the opposing side to create a sense of luxury.