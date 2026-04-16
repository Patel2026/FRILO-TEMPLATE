```markdown
# Design System Document: The Editorial Harvest

## 1. Overview & Creative North Star
**Creative North Star: "The Sun-Drenched Atrium"**

This design system moves away from the clinical, "app-like" feel of traditional food service platforms. Instead, it adopts a **High-End Editorial** aesthetic that celebrates abundance and warmth. We are not just building an interface; we are curating a digital table. 

To break the "template" look, we utilize **Intentional Asymmetry**. Photography should break the container boundaries, and typography should utilize extreme scale shifts. By overlapping "floating" elements over high-quality, macro-photography of fresh produce, we create a sense of depth and tactile richness. The goal is to make the user feel the "Golden Hour" of a harvest—warm, inviting, and premium.

---

## 2. Colors & Surface Architecture

The palette is rooted in the "Harvest Tones": Golden Yellow, Tomato Red, and Persimmon Orange. However, the secret to a premium feel is how these interact with the neutral foundation.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined through **Background Tonal Shifts**. For example, a "Menu of the Day" section should be wrapped in `surface-container-low` to sit softly against the `surface` background. This creates an organic, sophisticated flow rather than a rigid, boxed-in layout.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked fine linen or frosted glass.
- **Base:** `surface` (#fffcf5) – The canvas.
- **Sectioning:** `surface-container` (#f6f3eb) – For distinct content blocks.
- **Interactive Elements:** `surface-container-lowest` (#ffffff) – Used for cards or inputs to provide a "lift" through pure brightness rather than shadows.

### The "Glass & Gradient" Rule
To add "soul" to the layout, use **Glassmorphism** for navigation bars or floating action buttons (FABs). Use `surface` colors at 70% opacity with a `24px` backdrop-blur. 
**Signature Texture:** Main CTAs should not be flat. Use a subtle linear gradient (45°) from `primary` (#845d00) to `primary-container` (#feb700) to give a sun-kissed, embossed appearance.

---

## 3. Typography: The Editorial Voice

We pair **Plus Jakarta Sans** (Display) with **Be Vietnam Pro** (Body) to balance modern friendliness with professional legibility.

| Level | Token | Font Family | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Plus Jakarta Sans | 3.5rem | 800 | Hero claims; use with -2% letter spacing. |
| **Headline**| `headline-lg`| Plus Jakarta Sans | 2.0rem | 700 | Section headers; always high contrast. |
| **Title**   | `title-lg`   | Be Vietnam Pro   | 1.375rem| 600 | Card titles; approachable and clear. |
| **Body**    | `body-lg`    | Be Vietnam Pro   | 1.0rem  | 400 | Narrative text; high readability. |
| **Label**   | `label-md`   | Plus Jakarta Sans | 0.75rem | 700 | Uppercase; used for "New" or "Hot" tags. |

**Editorial Tip:** Use `display-lg` in `secondary` (#ca002c) for impact, but keep `body` text in `on-surface` (#383833) to maintain visual comfort.

---

## 4. Elevation & Depth: Tonal Layering

We eschew traditional Material Design shadows in favor of **Natural Ambient Depth**.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-lowest` card on a `surface-container-low` background. The contrast in brightness provides all the separation the eye needs.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a "Harvest Shadow": `0px 20px 40px rgba(56, 56, 51, 0.06)`. This is a low-opacity tint of our `on-surface` color, mimicking natural light.
*   **The "Ghost Border":** For accessibility in forms, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use for floating overlays. A `secondary-container` (#ffc3c1) with 40% opacity and blur creates a beautiful "Tomato-tinted glass" effect for seasonal alerts.

---

## 5. Signature Components

### Buttons (The "Pill" Aesthetic)
*   **Primary:** Gradient of `primary` to `primary-container`. `xl` roundedness (3rem). Bold `on-primary` text.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Interaction:** On hover, apply a `1.02` scale transform. Never use a "darken" overlay; instead, increase the gradient intensity.

### The "Abundance" Cards
*   **Rule:** Forbid the use of divider lines. 
*   **Structure:** Use `2rem` (xl) padding. Use vertical whitespace to separate the image, title, and description. 
*   **Photography:** Images should use `lg` rounded corners (2rem) and, where possible, have a "cut-out" item (like a sprig of rosemary) overlapping the card edge onto the background.

### Harvest Chips
*   **Style:** `full` roundedness. 
*   **Color:** Use `tertiary-container` (#ff9735) for active states. The warmth of the orange implies "freshness" and "energy."

### Input Fields
*   **Style:** Soft-filled. Use `surface-container` background. 
*   **Focus:** A 2px "Ghost Border" of `primary` (#845d00) at 40% opacity. Avoid harsh black outlines.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where food photography is larger than the text column next to it.
*   **Do** use `secondary` (#ca002c) sparingly for high-action items like "Book a Table."
*   **Do** utilize the `surface-bright` token to create "light-leak" effects in the corners of sections.

### Don’t:
*   **Don’t** use black (#000000). Always use `on-surface` (#383833) for text to keep the "warmth."
*   **Don’t** use 1px borders to separate list items. Use `1.5rem` of vertical spacing or a subtle `surface-variant` background shift.
*   **Don’t** use sharp corners. Everything must feel "friendly" and "approachable"—stick to the `1rem` to `3rem` roundedness scale.
*   **Don't** crowd the food. Let the photography breathe by using the `xl` spacing scale.

---

## 7. Spacing Scale
The spacing scale is generous to reflect the "Abundance" of a buffet.
- **Compacted:** 0.5rem (sm) - For label-to-icon relationships.
- **Standard:** 1.5rem (md) - For internal card padding.
- **Sectional:** 4rem to 6rem - For vertical breathing room between major sections. Empty space is a luxury; use it.```