# Design System Document: The Architect of Justice

## 1. Overview & Creative North Star
**Creative North Star: The Monolithic Authority**

This design system is built to command the room before a single word is spoken. For a high-stakes litigation firm, the UI must mirror the gravity of a courtroom and the precision of a closing argument. We are moving away from the "friendly tech startup" aesthetic. Instead, we embrace **The Monolithic Authority**—a philosophy characterized by razor-sharp edges (0px border radius), massive typographic contrast, and a deliberate rejection of traditional UI "containers" in favor of architectural layering.

By utilizing intentional asymmetry and expansive negative space, we break the "template" look. We don't just present information; we build a case. The layout should feel dynamic and unstoppable, using overlapping elements to suggest depth and a multi-dimensional approach to legal strategy.

---

## 2. Colors: Depth and Conviction
Our palette is rooted in the "Power Suit" aesthetic: deep charcoal and absolute blacks punctuated by a "Crimson Evidence" red.

### The Palette
*   **Primary (`#ffb4ab` / `#b91c1c`):** Our Crimson Red. Use this sparingly as a "strike" of color—CTA buttons, critical alerts, or a singular accent line.
*   **Surface Hierarchy:** 
    *   **Surface (`#131313`):** The base of our world.
    *   **Surface-Container-Lowest (`#0e0e0e`):** Used for "recessed" areas like footers or background zones.
    *   **Surface-Container-Highest (`#353534`):** Used for foreground elements that need to "step forward" toward the user.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. We define boundaries through tonal shifts. A section transitions from `surface` to `surface-container-low` to signal a change in context. Lines are a sign of structural weakness; volume is a sign of strength.

### The "Glass & Gradient" Rule
To add soul to the "Deep Black" UI, use subtle radial gradients on hero backgrounds, transitioning from `surface` to `surface-container-high`. For floating navigation or utility panels, employ **Glassmorphism**: use `surface` at 70% opacity with a 20px backdrop blur. This ensures the high-quality imagery of our lawyers remains visible even "behind" the interface.

---

## 3. Typography: The Voice of Law
We pair the intellectual weight of a high-contrast serif with the modern efficiency of a geometric sans-serif.

*   **The Headings (Newsreader):** This is our "Editorial Voice." `display-lg` and `headline-lg` should be used to make bold, provocative statements. The high contrast of the serif strokes conveys heritage and sophistication.
*   **The Body (Public Sans):** This is our "Evidence." Clean, objective, and highly legible. It provides the functional balance to the emotive headings.

**Hierarchy as Identity:**
Use `display-lg` (3.5rem) for hero statements with tight letter-spacing. Use `label-md` (0.75rem) in all caps with wide letter-spacing (0.1rem) for section headers to create a "legal brief" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, we do not use shadows to mimic light; we use tone to mimic physical presence.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-highest` card atop a `surface` background. The contrast in charcoal values creates a natural, sophisticated lift.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use an ultra-diffused shadow: `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5)`. Never use harsh, dark grey drop shadows.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` token at 15% opacity. It should be felt, not seen.
*   **Asymmetrical Overlays:** Elevate the premium feel by allowing imagery to "bleed" out of its container or overlap into the next section, breaking the rigid grid and creating a custom, editorial flow.

---

## 5. Components: Precision Implements

### Buttons
*   **Primary:** Solid `primary-container` (`#a50510`) with `on-primary-container` text. **0px border radius.** Hover state should shift to a subtle gradient or a slightly brighter `primary` (`#ffb4ab`).
*   **Secondary:** Ghost style. No background, `outline` color text, and a "Ghost Border" (15% opacity `outline-variant`) that becomes 100% opaque on hover.

### Cards & Lists
*   **The Rule:** No dividers. Separate list items using 24px–32px of vertical white space or by alternating background tones between `surface-container-low` and `surface-container-lowest`.
*   **Imagery in Cards:** Use high-contrast, professional photography of African American legal professionals. Apply a subtle "charcoal filter" (low saturation, high contrast) to ensure text overlay readability.

### Input Fields
*   **Style:** Underline only. Avoid boxed inputs. Use `outline-variant` for the underline. Upon focus, the underline transforms into the `primary` (Crimson) color with a 2px thickness. 

### Signature Component: The "Case Timeline"
A vertical, asymmetrical timeline using the `tertiary` (`#eac34a`) color for milestone nodes. This provides a "gold standard" accent that suggests success and high-value results.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace the Dark:** Keep 90% of the UI in the `surface` and `surface-container` range.
*   **Be Bold with Scale:** Use massive `display-lg` type next to small, wide-spaced `label-md` text for a high-end fashion/editorial feel.
*   **Use Sharp Corners:** 0px radius everywhere. Any curve breaks the authoritative "Monolithic" vibe.
*   **Focus on the Photography:** The lawyers are the stars. Ensure imagery is large-scale and high-resolution.

### Don't:
*   **Don't use 1px Solid Borders:** It looks "bootstrap" and cheap. Use background color shifts.
*   **Don't use Standard Shadows:** Avoid the "floating card" look of basic Material Design.
*   **Don't use Playful Animations:** Transitions should be "Stable and Swift" (e.g., 300ms ease-out), not bouncy or "fun."
*   **Don't Overuse Red:** The crimson is a scalpel, not a sledgehammer. Use it only for points of maximum impact.

---
*Director’s Final Note: Design with the confidence of a lead counsel. Every pixel must look like it was placed with intent. If a design choice feels "standard," delete it and try a more architectural approach.*