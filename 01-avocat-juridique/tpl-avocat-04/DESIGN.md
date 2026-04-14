```markdown
# Design System Document: The Editorial Authority

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Monolith"**

This design system eschews the cluttered, "forms-and-tables" aesthetic of traditional legal tech. Instead, it adopts the posture of a high-end editorial publication—think *Vogue* meets *The Economist*. We are building a digital experience that feels "Architectural": it is built on a foundation of rigid, invisible grids and massive structural blocks of whitespace. 

To move beyond a "template" look, we utilize **Intentional Asymmetry**. We do not center everything; we lean into heavy left-aligned typography contrasted against expansive, empty "Surface" areas. We break the grid only for high-impact photography or "Antique Gold" accents, ensuring that every pixel feels curated, elite, and permanent.

---

## 2. Colors & Surface Philosophy

The palette is a study in tonal restraint. We rely on the interplay between deep charcoal, crisp whites, and the warmth of gold to convey a sense of generational trust.

### Color Strategy
- **Primary (`#5b5e66`):** Not a standard blue, but a "Deep Slate" that grounds the brand in modern professionalism.
- **Secondary (`#545f77`):** "Midnight Blue," used sparingly for deep-focus interactive elements.
- **Tertiary (`#785a1a`):** "Antique Gold." This is our signature. Use it only for highlights, critical CTAs, or a single ornamental "rule" line to draw the eye.
- **Surface & Background (`#f8f9fa`):** Our canvas. It is not pure white, but a "Crisp Paper" gray that reduces eye strain and feels more premium.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders for sectioning are strictly prohibited. 
- Boundaries must be defined through **Background Color Shifts**. 
- To separate a section, transition from `surface` to `surface-container-low`.
- This creates a seamless, "molded" look rather than a "boxed-in" one.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Layer 1 (Bottom):** `surface` (The foundation).
- **Layer 2 (Middle):** `surface-container` (Major content blocks).
- **Layer 3 (Top):** `surface-container-lowest` (The "Sheet of Paper" effect for cards).
By nesting `#ffffff` (Lowest) inside `#eaeff1` (Container), we create a natural lift that signals priority without needing a single drop shadow.

### The "Glass & Gradient" Rule
For floating navigation or modal overlays, use **Glassmorphism**. Apply `surface-container` with 80% opacity and a `backdrop-filter: blur(12px)`. This prevents the UI from feeling "pasted on" and maintains the editorial flow of the photography beneath.

---

## 3. Typography: The Voice of Authority

Our typography is a conversation between tradition (**Noto Serif**) and modern clarity (**Manrope**).

- **Display & Headlines (Noto Serif):** These are our "Statement" pieces. High contrast, elegant, and authoritative. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to evoke a sense of high-end print.
- **Body & Titles (Manrope):** A geometric sans-serif that ensures the "Fine Print" is never hard to read. It provides the "Clear and Highly Structured" personality of the brand.
- **Labeling:** Use `label-md` in all-caps with increased letter-spacing (+0.1em) for category tags or "Step" indicators. This mimics the "Header" style of archival legal documents.

---

## 4. Elevation & Depth: Tonal Layering

We do not use elevation to simulate height; we use it to simulate **Focus**.

- **The Layering Principle:** Depth is achieved by stacking. A `surface-container-highest` element should never sit on a `surface-bright` background; the jump is too jarring. Follow the natural gradient of the tiers.
- **Ambient Shadows:** Shadows are a last resort. If required, use a "Tinted Shadow": `box-shadow: 0 20px 40px rgba(43, 52, 55, 0.05)`. The shadow color is derived from `on-surface`, making it feel like natural ambient light.
- **The "Ghost Border":** For input fields or essential containment, use the `outline-variant` token at **15% opacity**. It should be barely visible—a "whisper" of a line.

---

## 5. Components

### Buttons: The "Solid Stone" Variant
- **Primary:** Square corners (`0px`). Solid `primary` background with `on-primary` text. No gradients. No shadows.
- **Secondary:** Square corners. `outline-variant` ghost border. 
- **Tertiary (Signature):** Text-only using `tertiary` (Gold) with a 1px gold underline that expands on hover.

### Input Fields: "Minimalist Form"
- Forbid the "box" look. Use a "Bottom-Border Only" approach or a very subtle `surface-container-high` background.
- Error states use `error` (`#9f403d`) for the label text, but never a heavy red box.

### Cards & Lists: "The Editorial Feed"
- **Forbid Divider Lines:** Use vertical white space (`48px` or `64px`) to separate list items.
- **Photography:** Use large, full-bleed images within cards. Overlay text using the "Glassmorphism" rule for a sophisticated, layered look.

### Additional Component: "The Signature Rule"
- A 2px horizontal line using the `tertiary` (Gold) color, used to separate a Headline from a Sub-headline. It should never span the full width—limit it to `80px` to maintain asymmetry.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use `0px` roundedness for everything. Sharp corners convey precision, law, and structure.
- **Do** use "Extreme Whitespace." If you think there is enough space between sections, double it.
- **Do** use Noto Serif for numbers (dates, statistics). It makes data feel like "historical record."

### Don’t:
- **Don’t** use standard "Success Green" or "Warning Orange." Stick to the palette. Use `primary-fixed` for neutral states and `error` only for critical failures.
- **Don’t** use icons unless absolutely necessary. Rely on clear, high-contrast typography first.
- **Don’t** use center-alignment for long-form text. It breaks the "Editorial Grid" and feels amateur. Left-align for authority.
- **Don't** ever use a border-radius. In this system, curves are a sign of weakness; right angles are a sign of stability.

---

## 7. Spacing Scale
Our spacing is built on an **8pt Grid**, but for layout, we prioritize **Scale 12** (96px) and **Scale 16** (128px) to create the "Elite" sense of breathing room. Content should feel like it is "floating" in a vast, structured gallery.```