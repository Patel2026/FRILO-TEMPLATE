```markdown
# Design System Specification: High-End Editorial

## 1. Overview & Creative North Star: "The Nocturnal Concierge"
This design system is built to evoke the hushed, prestigious atmosphere of an exclusive midnight atelier. We are moving away from the "functional utility" of standard restaurant apps toward a "High-End Editorial" experience. The North Star is **The Nocturnal Concierge**: a design that feels less like a software interface and more like a leather-bound, gold-leafed menu presented under dim gallery lighting.

To achieve this, we reject the rigid, boxed-in layouts of the modern web. We embrace **intentional asymmetry**, where large-scale serif typography overlaps high-resolution photography, and **extreme white space** (or "dark space") to signal luxury. The interface should feel spacious, quiet, and deliberate.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is a sophisticated interplay of `background` (#131313) and `primary` gold (#f1c97d), supported by muted stone and charcoal tones.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional dividers are the enemy of luxury. Boundaries must be created through:
- **Tonal Shifts:** Placing a `surface-container-low` (#1c1b1b) card against a `surface` (#131313) background.
- **Negative Space:** Using generous margins to allow the eye to perceive a break in content without a physical line.

### Surface Hierarchy & Nesting
Treat the UI as a physical environment with depth.
*   **The Foundation:** `surface` (#131313) is your base.
*   **The Inset:** Use `surface-container-lowest` (#0e0e0e) for deep, "sunken" areas like footer backgrounds or input fields.
*   **The Lift:** Use `surface-container-high` (#2a2a2a) for elements that need to feel physically closer to the user, like a floating reservation bar.

### The "Glass & Gold" Signature
For primary CTAs or high-impact hero moments, utilize a subtle gradient from `primary` (#f1c97d) to `primary-container` (#d4ad65). For floating navigation or overlays, apply **Glassmorphism**: use `surface` at 70% opacity with a `20px` backdrop-blur to allow underlying photography to bleed through softly.

---

## 3. Typography: The Editorial Scale
We use a high-contrast pairing: **Noto Serif** for prestige and **Manrope** for modern legibility.

*   **Display (L/M/S):** `notoSerif`. Used for hero headlines and "Statement" prices. The `display-lg` (3.5rem) should be used with tight letter-spacing and occasionally intentional overlapping with imagery.
*   **Headline (L/M/S):** `notoSerif`. Used for section titles (e.g., "The Degustation Menu").
*   **Title & Body (L/M/S):** `manrope`. These tokens carry the weight of the information. `body-lg` (1rem) is the workhorse for menu descriptions.
*   **Label (M/S):** `manrope`. These should be used sparingly, perhaps in all-caps with increased letter-spacing (0.1em) for secondary metadata like "VINTAGE" or "ALLERGENS."

---

## 4. Elevation & Depth: Tonal Layering
We avoid the "Material" look of heavy shadows. We convey importance through **Tonal Layering**.

*   **The Layering Principle:** To lift a card, do not add a shadow immediately. Instead, change the background from `surface` to `surface-container-low`.
*   **Ambient Shadows:** If a floating element (like a Date Picker) requires a shadow, it must be "Ambient." Use the `on-surface` color at 5% opacity, with a blur radius of at least `40px` and an offset of `y: 20px`. It should feel like a soft glow, not a hard drop shadow.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#4d4635) at **15% opacity**. This creates a whisper of a boundary that disappears into the background.

---

## 5. Components: The Bespoke Collection

### Buttons: The Formal Invitation
*   **Primary:** Solid `primary` (#f1c97d) with `on-primary` (#412d00) text. Shape: 0px radius (Sharp).
*   **Secondary:** `outline` (#99907c) "Ghost Border" (15% opacity) with `primary` text.
*   **Interaction:** On hover, the primary button should shift to `primary-fixed-dim` (#e9c176) with a subtle `10px` blur expansion.

### Cards: The Gallery Slate
*   **Rule:** Forbid divider lines.
*   **Construction:** Use `surface-container-low` (#1c1b1b). Use `headline-sm` for the dish name and `body-sm` for the description. The price should be in `primary` gold, set in `notoSerif` to elevate its importance.

### Input Fields: The Ledger
*   **Style:** Minimalist. No bounding box. Only a bottom "Ghost Border" using `outline-variant`.
*   **Labels:** Use `label-md` floating above the line in `on-surface-variant` (#d0c5af).

### Signature Component: The "Chef's Overlay"
A full-screen modal using `surface` (#131313) at 95% opacity with a heavy `backdrop-blur`. This is used for dish details, creating a focused, immersive reading experience that blocks out the rest of the app.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use 0px border-radius for everything. Sharp corners equate to high-end architectural precision.
*   **Do** use "Asymmetric Padding." For example, give a headline more top-padding than bottom-padding to create an editorial flow.
*   **Do** use high-quality, desaturated photography. Images should feel like they belong in *Vogue* or *Kinfolk*.

### Don't:
*   **Don't** use icons unless absolutely necessary. Prefer text labels (e.g., use the word "Menu" instead of a hamburger icon).
*   **Don't** use pure white (#FFFFFF). Use `tertiary-fixed` (#e5e2e1) for the brightest text to maintain a warm, candle-lit feel.
*   **Don't** use standard animations. Use slow, ease-in-out transitions (300ms-500ms) to mimic the unhurried pace of fine dining.

---

## 7. Roundedness Scale
In this system, we reject the curve. 
*   **All Tokens (DEFAULT, sm, md, lg, xl, full):** `0px`.
*   *Rationale:* Sharp edges communicate prestige, discipline, and architectural modernism. Curvature is too "friendly" for this level of exclusivity.```