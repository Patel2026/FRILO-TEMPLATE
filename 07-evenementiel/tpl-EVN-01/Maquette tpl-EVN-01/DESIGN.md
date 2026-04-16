# Design System Document: The Ethereal Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Atelier"**
This design system rejects the "template" aesthetic of the modern web in favor of a high-end editorial experience. It is designed to feel like a bespoke wedding invitation or a luxury fashion lookbook. We achieve this through a "less but better" philosophy: extreme whitespace, intentional asymmetry, and the complete removal of structural lines. 

The goal is to evoke emotion through **Atmospheric Minimalim**. We don't just display information; we curate a feeling of serenity and timelessness. By overlapping imagery with typography and utilizing tonal layering, we create a sense of physical depth—as if the user is leafing through heavy, vellum paper.

---

## 2. Colors & Surface Philosophy
The palette is rooted in nature and nostalgia: the cream of handmade paper, the soft sage of a botanical garden, and the warmth of heirloom gold.

### Tone Roles
- **Primary (`#775a19`):** Our "Heirloom Gold." Reserved for moments of high intent—key CTAs, active states, and signature flourishes.
- **Secondary (`#526442`):** "Secret Garden Sage." Used for grounding elements, supporting icons, or botanical accents.
- **Tertiary (`#715a49`):** "Dusty Rose/Taupe." Provides a romantic, earthy warmth to balance the cool sage.
- **Surface (`#faf9f6`):** Our "Canvas." A warm, off-white that prevents the sterile feel of pure hex white.

### The "No-Line" Rule
**Borders are strictly prohibited for sectioning.** To define boundaries, you must use background color shifts. A section might transition from `surface` to `surface-container-low` to signal a change in context. This creates a "soft-edge" layout that feels organic rather than mechanical.

### The "Glass & Gradient" Rule
To add "soul" to the digital interface, use subtle radial gradients.
- **CTA Depth:** For primary buttons, use a subtle linear gradient from `primary` to `primary_container`.
- **The Vellum Effect:** Floating overlays (modals or navigation) must use **Glassmorphism**. Apply `surface` at 80% opacity with a `20px` backdrop blur. This allows the romantic imagery beneath to "bleed" through, maintaining the airy atmosphere.

---

## 3. Typography: The Editorial Voice
We pair the timeless authority of a serif with the modern breathing room of a geometric sans-serif.

| Level | Token | Font Family | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Noto Serif | 3.5rem | Dramatic, high-contrast, used for Hero statements. |
| **Headline** | `headline-md` | Noto Serif | 1.75rem | Romantic and inviting; used for section starts. |
| **Title** | `title-lg` | Plus Jakarta Sans | 1.375rem | Bold but airy; used for card headings. |
| **Body** | `body-lg` | Plus Jakarta Sans | 1rem | High legibility, generous leading (1.6+). |
| **Label** | `label-md` | Plus Jakarta Sans | 0.75rem | Uppercase with 0.1em letter spacing for a "couture" look. |

**Stylistic Note:** Headlines should often be used with asymmetrical alignment (e.g., a large display-lg header offset 10% from the left) to break the "grid" feel.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is a whisper, not a shout.

- **The Layering Principle:** Stack surfaces to create focus. Place a `surface_container_lowest` card (pure white) on a `surface_container` background. The slight shift in "paper weight" provides all the hierarchy needed.
- **Ambient Shadows:** Standard shadows are too "tech." If an element must float (like a gallery lightbox), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(119, 90, 25, 0.05)`. Note the use of the `primary` gold tint in the shadow to keep it warm.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline_variant` at 15% opacity. It should be barely perceptible.

---

## 5. Components

### Buttons (The "Jewelry")
- **Primary:** Roundedness `sm` (0.125rem) or `none`. Use `primary` background with `on_primary` text. The sharp corners convey "bespoke tailoring."
- **Secondary:** Use a "Ghost Style." No background, `outline` token at 20% opacity, with a subtle hover transition to `primary_container`.
- **Interaction:** On hover, buttons should shift slightly upward (-2px) with a soft, slow transition (300ms ease-out) to mimic a physical lift.

### Input Fields
- **Styling:** Forbid four-sided boxes. Use a "Bottom Line Only" approach using the `outline` token. This mirrors luxury stationery.
- **Floating Labels:** Use `label-md` in `primary` gold when the field is active to provide a premium feedback loop.

### Cards & Lists
- **No Dividers:** Never use horizontal rules. Use `48px` to `64px` of vertical whitespace (Spaced Scale) to separate list items.
- **Imagery:** Cards should feature high-quality photography with `xl` (0.75rem) rounded corners to soften the "tech" feel of the screen.

### Navigation (The "Floating Header")
- **Style:** A transparent `surface` bar with a 10px backdrop blur. As the user scrolls, the bar should transition to `surface_container_low` at 90% opacity.

---

## 6. Do's and Don'ts

### Do:
- **Do use "Leaning" Layouts:** Place text on the left and imagery on the right, but allow the image to overlap the text container by 20px.
- **Do embrace whitespace:** If you think there is enough space, add 24px more.
- **Do use color as a guide:** Use `secondary_container` (Sage) for success states instead of harsh greens.

### Don't:
- **Don't use 1px solid borders:** It breaks the "paper and vellum" illusion.
- **Don't use pure black text:** Always use `on_surface` (`#1a1c1a`) or `on_surface_variant` for a softer, charcoal-pencil feel.
- **Don't use fast animations:** Avoid "snappy" transitions. Everything should fade or slide with a "slow-motion" grace (400ms - 600ms).
- **Don't use standard icons:** Opt for thin-stroke (1px) custom icons or SVG botanical illustrations.