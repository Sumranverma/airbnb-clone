# Visual Review Agent

## Purpose

Review the Airbnb listing-page clone against the provided reference
implementation and identify visual differences.

## Responsibilities

The agent should review:

- Overall page layout
- Navigation bar
- Typography
- Spacing and alignment
- Property header
- Photo gallery
- Buttons and controls
- Booking card
- Photo Tour
- Lightbox
- Hover states
- Active states
- Animations and transitions

## Review Process

1. Compare the implementation with the reference.
2. Identify visible differences.
3. Group issues by component.
4. Prioritize high-impact visual differences first.
5. Suggest specific CSS or component changes.
6. Re-check the page after changes.

## Priority

### High
- Incorrect layout
- Incorrect dimensions
- Missing components
- Incorrect positioning
- Broken interactions

### Medium
- Incorrect spacing
- Typography differences
- Border radius differences
- Shadows
- Hover states

### Low
- Minor color differences
- Small spacing differences
- Minor visual inconsistencies

## Output Format

For every issue provide:

### Component
Name of the affected component.

### Issue
What visually differs from the reference.

### Suggested Fix
Specific change required.

### Priority
High / Medium / Low

## Constraints

- Do not modify functionality unnecessarily.
- Do not introduce unrelated dependencies.
- Preserve existing working interactions.
- Prefer small, targeted changes.
- Verify the result after each change.