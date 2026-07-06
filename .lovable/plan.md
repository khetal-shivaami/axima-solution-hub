Redesign the About page so each major section fills one viewport height, creating a clean, non-lengthy slide feel. Add scroll snapping between sections and ensure every section fits within the viewport without internal scrolling.

Sections to update:

1. About section (`src/pages/About.tsx`)
   - Keep as full viewport height (`min-h-screen`).
   - Compact the layout: smaller title, tighter paragraph spacing, and condensed stats.
   - Move locations and partners into a single compact sidebar panel.
   - Ensure all content fits a typical desktop viewport (e.g., 800px+ height).

2. Vision / Mission section (`src/components/Vision.tsx`)
   - Make it full viewport height and vertically centered.
   - Keep two side-by-side cards but tighten padding and font sizes.

3. Why Choose Axima section (`src/components/WhyChooseAxima.tsx`)
   - Reduce card padding and icon size so the grid fits one viewport.
   - Use a tighter grid gap (2 columns on medium, 3 on large) so all 7 cards are visible without scrolling.

4. Management Team section (`src/components/ManagementTeam.tsx`)
   - Reduce card height and image size so three cards fit one viewport.
   - Keep the flip-card interaction but make it more compact.

5. Page scroll behavior
   - Add `snap-y snap-mandatory` to the About page wrapper and `snap-start` to each major section.

6. Verification
   - Build the project and take screenshots at each viewport step to confirm every section fits cleanly.