# Design System Document: The Clinical Sanctuary

## 1. Overview & Creative North Star
**Creative North Star: The Ethereal Clinic**
This design system moves away from the sterile, rigid grids of traditional healthcare software. Instead, it adopts a "High-End Editorial" approach to medical care. The goal is to evoke the feeling of a modern, world-class wellness center: quiet, light-filled, and impeccably organized.

By utilizing **intentional asymmetry** and **tonal depth**, we move beyond the "template" look. We favor breathing room over density, and soft transitions over hard lines. This is not just a tool; it is a reassuring digital environment that guides patients and practitioners with grace and authority.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the calming properties of sky and flora, but elevated through a sophisticated layering system.

### Color Tokens
- **Primary (The Authority):** `#0061a4` (Deep Medical Blue)
- **Primary Container (The Action):** `#2196f3` (Vibrant Trust)
- **Secondary (The Healing):** `#006e1c` (Botanic Green)
- **Tertiary (The Human Touch):** `#904d00` (Warm Ochre for subtle alerts/warmth)
- **Neutral Base:** `#f8f9ff` (Ice White)

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through:
1.  **Background Color Shifts:** A `surface-container-low` section sitting on a `surface` background.
2.  **Subtle Tonal Transitions:** Using padding and color to define the start of a new module.

### The "Glass & Gradient" Rule
To add visual "soul," use **Glassmorphism** for floating elements (e.g., navigation bars, modals). Apply semi-transparent surface colors with a `backdrop-blur` of 12px-20px. 
*   **Signature Textures:** For Hero sections or Primary CTAs, use a linear gradient from `primary` to `primary-container` at a 135-degree angle. This prevents the "flat" look and adds a premium, liquid depth.

---

## 3. Typography: Editorial Authority
We utilize a pairing of **Manrope** for high-impact display and **Inter** for clinical precision.

- **Display (Manrope):** Large, airy, and confident. Used for welcoming patients and section headers.
    - `display-lg`: 3.5rem (The "Welcome" moment)
- **Headline (Manrope):** Semi-bold and authoritative. Used to categorize services.
    - `headline-md`: 1.75rem
- **Body (Inter):** Maximum readability with generous line-height (1.6x).
    - `body-lg`: 1rem (Patient instructions and descriptions)
- **Label (Inter):** Small caps or bolded for metadata and clinical tags.
    - `label-md`: 0.75rem

**Hierarchy Note:** Use `display-sm` for patient names or metrics to make them feel like "data-as-art" rather than just text on a screen.

---

## 4. Elevation & Depth: The Layering Principle
Forget drop shadows that look like "dirty glows." Depth in this system is achieved through **Tonal Layering.**

- **The Layering Principle:** Treat the UI as stacked sheets of fine, translucent paper. 
    - *Level 0:* `surface` (The floor)
    - *Level 1:* `surface-container-low` (Content groupings)
    - *Level 2:* `surface-container-lowest` (Interactive cards/white paper effect)
- **Ambient Shadows:** Only use shadows for components that literally "float" (Modals, Tooltips). Use the `on-surface` color at 4% opacity with a blur of 30px. It should be felt, not seen.
- **The Ghost Border:** If a form field or container requires a boundary for accessibility, use `outline-variant` at **15% opacity**. High-contrast borders are strictly forbidden.

---

## 5. Components: Soft & Intentional

### Buttons
- **Primary:** Gradient-filled (`primary` to `primary-container`) with `xl` (1.5rem) rounded corners. Use 24px horizontal padding for a "pill" look that feels approachable.
- **Tertiary:** No background, no border. Use `primary` text with a subtle `surface-container-high` hover state.

### Cards & Lists
- **Forbid Dividers:** Do not use lines between list items. Use 16px of vertical whitespace or a hover-state background shift (`surface-container-highest`) to separate content.
- **Nesting:** Place `surface-container-lowest` cards on a `surface-container-low` background for a crisp, elevated feel.

### Input Fields
- Avoid the "box" look. Use a `surface-container-lowest` background with a `sm` (0.25rem) bottom-only accent in `primary` when focused. This maintains the "clean clinic" aesthetic.

### Additional Signature Components
- **The "Breath" Header:** A navigation bar using Glassmorphism that is 20px taller than standard, providing significant whitespace above the logo.
- **The Status Chip:** Use `secondary-fixed` backgrounds with `on-secondary-fixed-variant` text for "Confirmed" or "Healthy" statuses—soft green tones that reassure the patient.

---

## 6. Do’s and Don’ts

### Do
- **Do** use asymmetrical layouts (e.g., a headline on the left with a large, soft-focus medical image offset to the right).
- **Do** lean into the `xl` roundedness scale (1.5rem) for main containers to evoke friendliness.
- **Do** use "white-on-white" layering (white cards on an off-white `#f8f9ff` background).

### Don’t
- **Don't** use pure black (#000000). Use `on-surface` (#181c22) to keep the contrast soft.
- **Don't** use 1px dividers or borders to separate sections.
- **Don't** cram information. If a screen feels full, it needs more pages, not more components.
- **Don't** use standard Material Design "floating action buttons." Use integrated, elegant text-based CTAs.