```markdown
# Design System: High-End Editorial Real Estate

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built to transform a digital interface into a curated gallery experience. We are moving away from the "template" look of traditional real estate portals. Our Creative North Star is **The Digital Curator**: a philosophy that treats every property listing like a piece of fine art. 

The aesthetic is defined by **intentional asymmetry**, where large-scale serif typography overlaps high-resolution architectural photography, and **extreme breathing room** creates a sense of exclusivity. We do not crowd the user; we invite them into a space of quiet prestige. By utilizing a 0px roundedness scale across the board, we embrace a "Sharp-Edge Architectural" look that feels structural, permanent, and authoritative.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The color palette is rooted in high-contrast neutrals—Deep Black (`on_surface`) and Crisp White (`surface`)—interrupted only by the "Gilded Harvest" of our secondary gold tones.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Traditional dividers are considered "clutter" in a luxury context. 
- **Boundaries:** Define transitions solely through background color shifts. For example, a section using `surface_container_low` (#f3f3f3) should sit directly against a `surface` (#f9f9f9) background.
- **Surface Hierarchy:** Treat the UI as a series of physical layers. Use the `surface_container` tiers (Lowest to Highest) to create nested depth.
    - *Example:* Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f3f3f3) section to create a soft, natural lift.

### Signature Textures & Gradients
- **The "Gold Leaf" Gradient:** For primary CTAs and hero accents, use a subtle linear gradient from `secondary` (#775a19) to `secondary_fixed_dim` (#e9c176). This mimics the way light hits metallic foil.
- **Glassmorphism:** For navigation bars or floating property details, use `surface` (#f9f9f9) at 80% opacity with a `24px` backdrop-blur. This ensures the high-end photography "bleeds" through the UI, softening the rigid structure.

---

## 3. Typography: The Editorial Scale
We use a high-contrast typographic pairing to signal prestige.

- **Display & Headlines (Noto Serif):** These are our "Voice of Authority." Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) for property titles. Bold, serif headers should occasionally overlap imagery to break the grid.
- **Titles & Body (Manrope):** This is our "Functional Modernism." Manrope provides a clean, technical counterpoint to the serif headers.
- **Hierarchy as Identity:** 
    - Use `label-sm` (uppercase with 0.1em letter-spacing) for "exclusive" tags or categories.
    - Body text should never exceed 65 characters per line to maintain an editorial, readable feel.

---

## 4. Elevation & Depth: Tonal Layering
In this system, "Elevation" is a color property, not a shadow property.

- **The Layering Principle:** Depth is achieved by stacking the `surface-container` tiers. 
- **Ambient Shadows:** Shadows are rarely used. If a "floating" modal is required, use a shadow with a `48px` blur, `0%` spread, and 6% opacity using the `on_surface` (#1a1c1c) tint. It should look like a soft glow of light, not a "drop shadow."
- **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in input fields), use the `outline_variant` (#d1c5b4) at 20% opacity. **Never use 100% opaque black borders.**

---

## 5. Components: Architectural Primitives

### Buttons: The "Monolith" Style
- **Primary:** Solid `on_surface` (#1a1c1c) with `on_primary` (#ffffff) text. Rectangular (0px radius). Use `title-sm` for button labels.
- **Secondary (The Gilded):** `secondary` (#775a19) background. Reserved for high-conversion actions like "Book a Private Viewing."
- **Tertiary:** Text-only with a `secondary` 1px underline that expands on hover.

### Cards: The "Seamless" Gallery
- Forbid divider lines within cards. 
- Use vertical white space (64px+) and `surface_container_highest` (#e2e2e2) backgrounds to separate the image from the text.
- Overlap the property price (using `notoSerif` `headline-sm`) slightly over the property image.

### Input Fields: Minimalist Form
- **State:** Only a bottom border (1px) using `outline`.
- **Focus:** The bottom border transitions to `secondary` (gold).
- **Label:** Use `label-md` floating above the line in `on_surface_variant`.

### Lists & Navigation
- **Navigation:** Use extreme horizontal spacing between items. 
- **Dividers:** Prohibited. Use a change from `surface` to `surface_container_low` to indicate a new list group.

---

## 6. Do's and Don'ts

### Do:
- **Do** use "Negative Space" as a functional element. If a section feels crowded, double the padding.
- **Do** use `display-lg` for single, impactful words or numbers (e.g., "01" for a step in a process).
- **Do** ensure all images have a slight `on_surface` overlay (5-10%) to ensure white text remains legible.

### Don't:
- **Don't** use rounded corners. Everything must be 0px to maintain the "Architectural" feel.
- **Don't** use standard blue for links. Use `secondary` (gold) or `on_surface` (black) with an underline.
- **Don't** use "Card Shadows" to define a grid. Use the `surface` color shifts defined in Section 2.
- **Don't** use center-aligned text for long-form copy. Keep it left-aligned to mimic high-end magazine layouts.

---

## 7. Signature Real Estate Component: "The Feature Slate"
A unique component for this system: A full-bleed `surface_container_highest` section that features a single property detail (e.g., "Infinity Pool").
- **Layout:** One half is an ultra-wide image; the other half is 50% empty space with a single `notoSerif` `headline-lg` quote. 
- **Purpose:** To slow the user down and force them to appreciate the luxury of the detail.```