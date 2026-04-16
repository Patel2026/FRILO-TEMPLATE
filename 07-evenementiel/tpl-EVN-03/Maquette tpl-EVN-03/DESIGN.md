# Design System Document: The Kinetic Gala

## 1. Overview & Creative North Star
**Creative North Star: "Structured Euphoria"**

This design system is engineered to capture the lightning-in-a-bottle energy of a live event and bottle it within a high-end digital interface. We are moving away from the "corporate grid" and toward a "Digital Editorial" experience. By utilizing intentional asymmetry, overlapping elements, and high-energy color transitions, we ensure the UI feels as alive as the parties it represents.

To break the "template" look, designers must embrace **Negative Space as a Luxury**. Rather than filling every corner, use large margins to let the vibrant accents breathe. The goal is a layout that feels curated and bespoke, where every element has been placed with the intention of a master event planner.

## 2. Colors & Surface Philosophy

### The Palette
The color strategy relies on a deep, obsidian base (`surface: #1b0424`) to make the vibrant neon tokens truly "pop."

*   **Primary (`#cf96ff`):** Use for brand-critical moments and primary actions.
*   **Secondary (`#26fedc`):** An energetic teal used for success states and interactive highlights.
*   **Tertiary (`#ff62c5`):** A high-voltage pink for secondary CTAs and playful decorative accents.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections.
Boundaries must be created through background shifts. If you need to separate the Hero from a Content section, transition from `surface` to `surface-container-low`. The transition should feel like a change in lighting at a venue, not a line on a blueprint.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the surface-container tiers to create "nested" depth:
1.  **Base Layer:** `surface` (#1b0424)
2.  **Raised Section:** `surface-container-low` (#22062c)
3.  **Interactive Cards:** `surface-container-high` (#32113d)
4.  **Floating Elements:** `surface-bright` (#421b4f)

### The "Glass & Gradient" Rule
To achieve a premium, high-end feel, main CTAs and "Hero" cards should utilize a **Signature Gradient** (e.g., `primary` to `primary-dim`). For floating navigation or modal overlays, use **Glassmorphism**: 
*   **Background:** `surface-variant` at 60% opacity.
*   **Blur:** 20px–40px backdrop-blur.
*   **Result:** A "frosted violet" look that allows the energetic background colors to bleed through.

## 3. Typography: The Editorial Voice

Our typography is a dialogue between the "Life of the Party" and the "Master Organizer."

*   **Display & Headlines (Epilogue):** This is our "High-Energy" voice. Use `display-lg` (3.5rem) with tight letter-spacing for hero sections. It should feel loud, bold, and authoritative.
*   **Body & Titles (Be Vietnam Pro):** This is our "Operational" voice. It provides a clean, readable counter-balance to the loud headlines. It ensures that while the event looks wild, the logistics (dates, times, pricing) are crystal clear.

**Hierarchy Tip:** Always pair a `display-md` headline with a `title-sm` eyebrow text in `secondary` teal to create a sophisticated, layered information architecture.

## 4. Elevation & Depth

### The Layering Principle
Forget shadows; use **Tonal Layering**. Place a `surface-container-highest` card on top of a `surface-container-low` background. The subtle shift in purple saturation creates a sophisticated "lift" that feels more modern than a heavy drop shadow.

### Ambient Shadows
If a floating effect is mandatory (e.g., a "Book Now" floating action button):
*   **Blur:** 40px+
*   **Opacity:** 8%
*   **Color:** Use a tinted shadow (`#480079`) rather than black to maintain the vibrant depth of the dark purple background.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a **Ghost Border**: `outline-variant` (#5a3d62) at 15% opacity. It should be felt, not seen.

## 5. Components

### Buttons (The "Pulse" Interaction)
*   **Primary:** `primary` background with `on-primary` (#480079) text. Shape: `full` (pill-shaped). 
*   **Secondary:** Ghost style. Transparent background with a `secondary` teal Ghost Border and `secondary` text.
*   **Interaction:** On hover, primary buttons should scale 1.05x and increase their `surface-tint` glow.

### Cards & Lists
*   **Constraint:** Zero dividers. Use vertical white space from the Spacing Scale (default: 1rem).
*   **Style:** Use `xl` (3rem) rounded corners for a playful, friendly energy.
*   **Content:** Overlap images slightly over the card edges to break the "box" feel.

### Selection Chips
*   **Style:** `surface-container-highest` background with `on-surface-variant` text.
*   **Selected State:** Transition to `tertiary` pink background with `on-tertiary` text.

### Input Fields
*   **Style:** Minimalist. `surface-container-low` fill, no border.
*   **Active State:** A 2px bottom-bar of `secondary` teal.

### Event-Specific Components: "The Countdown Ticker"
*   **Design:** A high-contrast `display-sm` font using the `primary_fixed_dim` color, nested inside a glassmorphic container to create urgency for ticket sales.

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts (e.g., a headline aligned left with an image offset to the right).
*   **Do** use the `xl` (3rem) corner radius for high-impact visual containers.
*   **Do** use `secondary` (Teal) for micro-interactions to guide the user's eye.

### Don't:
*   **Don't** use pure black (#000000) for backgrounds; it kills the vibrancy of the purple tones. Use `surface` (#1b0424).
*   **Don't** use standard "Grey" for disabled states. Use `outline` (#8a6a92) at 30% opacity to keep it within the color family.
*   **Don't** use sharp 0px corners. This design system is energetic and fluid, not rigid and corporate.