# Design System Strategy: The Curated Sanctuary

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Editorial Sanctuary."** 

We are moving away from the "app-like" rigidity of standard spa websites and toward a high-end digital editorial experience. This system balances the grounding stability of a forest floor with the ethereal light of a luxury atrium. We achieve this by rejecting "standard" layouts in favor of intentional asymmetry, overlapping botanical elements, and expansive whitespace. This is not just a service provider; it is an immersive breath of fresh air. 

Designers should prioritize "The Breath"—the space between elements—as much as the elements themselves. By using generous 100px section padding and offset image-to-text ratios, we create a sense of unhurried luxury.

---

## 2. Colors: Tonal Depth & Organic Transitions
This palette is rooted in nature and prestige. Use the tokens to build a sense of atmospheric calm.

### The "No-Line" Rule
Prohibit the use of 1px solid borders for sectioning. Boundaries must be defined through tonal shifts. A transition from `surface` (#fcf9f4) to `tertiary` (#526353) should feel like walking from a sunlit room into a shaded forest.

### Surface Hierarchy & Nesting
Treat the UI as a series of fine paper layers.
- **Base:** Use `surface` (#fcf9f4) for primary content areas.
- **In-Set Depth:** Use `surface-container-low` (#f6f3ee) for subtle inset modules like testimonial sliders.
- **Elevation:** Use `surface-container-lowest` (#ffffff) for high-importance cards to make them feel "lifted" by light rather than shadow.

### The Glass & Gradient Rule
To add "soul," use subtle gradients on primary CTAs transitioning from `primary` (#745a27) to `primary-container` (#c9a96e). For floating navigation or mobile menus, utilize **Glassmorphism**: use `surface` at 80% opacity with a `20px` backdrop-blur to allow botanical illustrations to peek through the UI.

---

## 3. Typography: The Editorial Voice
We use a high-contrast scale to mirror the hierarchy of a luxury magazine.

*   **Display & Headlines (The Grandeur):** Using `notoSerif` (or Cormorant Garamond), headlines should feel authoritative yet airy. Use `display-lg` (3.5rem) for hero sections with wide tracking (-0.02em) to command attention.
*   **Body (The Clarity):** Using `plusJakartaSans` (or Jost) ensures modern readability. The `body-lg` (1rem) is your workhorse for descriptions, providing a clean, utilitarian counterpoint to the decorative serif.
*   **Labels (The Detail):** Use `label-md` for "Small-caps" treatments on sub-headers or category tags to inject a boutique feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital." We use light and opacity to define space.

*   **The Layering Principle:** Avoid shadows where possible. Place a `surface-container-lowest` card on a `surface-container` background to create a soft, natural lift.
*   **Ambient Shadows:** If a floating element (like a booking modal) requires a shadow, use a large blur (40px) at 6% opacity, tinted with `primary` (#745a27). This mimics the way a leaf casts a soft shadow on a stone path.
*   **The Ghost Border:** For form inputs or accessibility-critical boundaries, use the `outline-variant` token at **15% opacity**. Never use 100% opaque black or grey lines.

---

## 5. Components
Each component must feel "designed," not "default."

*   **Buttons (The Pill):** 
    *   **Primary:** Full rounded pill (`full`: 9999px). Background: `primary` (#745a27), Text: `on-primary`. 
    *   **Secondary:** Ghost style with a `primary` label and a 1px border at 20% opacity.
*   **Cards:** Forbid divider lines. Use `surface-container-low` and generous `xl` (3rem) internal padding. Overlap images 20px outside the card boundary for an editorial look.
*   **Botanical Dividers:** Instead of lines, use the `primary-container` (Gold) for 1px tall, 100px wide horizontal lines, centered to act as a "pause" between sections.
*   **Input Fields:** Use "Floating Label" style. Background should be `surface-container-lowest` with a bottom-only border using `outline-variant`. 
*   **Booking Chips:** Use `secondary-container` (#d2e8ad) with `on-secondary-container` (#56693a) text for selected states—a direct nod to the forest-green branding.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Place an image on the left at 50% width and the text on the right at 40% width with a 10% offset.
*   **Use Generous Leading:** Set body copy line height to 1.6 or 1.8 to ensure a relaxed reading pace.
*   **Layer Botanicals:** Allow line-art illustrations to "underlay" text blocks or "peek" from behind cards.

### Don’t:
*   **Don't Use Pure Black:** Always use `on-surface` (#1c1c19) or `on-background` for text to maintain the "warmth" of the cream palette.
*   **Don't Over-Color:** Stick to the `surface` and `surface-container` tones for 80% of the UI. Reserve the `dark forest green` (#1C2B1E) for high-impact break-out sections only.
*   **Don't Use Sharp Corners:** Every container must have at least an `md` (1.5rem) or `lg` (2rem) radius to maintain the "Soft Minimalism" ethos.