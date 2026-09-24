# AI Prompt Sequence

This document records the sequence of AI-assisted development prompts
used while building the Airbnb listing-page clone.

---

## 1. Project Understanding

Prompt:

"Analyze the provided Airbnb clone assignment and break the
requirements into small implementation steps."

Purpose:

- Understand the required views.
- Identify required interactions.
- Identify technical and submission requirements.

---

## 2. Project Setup

Prompt:

"Help me create the React project from scratch using Vite and
organize the project into reusable components."

Purpose:

- Set up the React application.
- Establish the initial project structure.

---

## 3. Component Architecture

Prompt:

"Break the Airbnb listing page into reusable React components
for the navbar, property header, photo gallery, property information,
booking card, photo tour and lightbox."

Purpose:

- Create a maintainable component structure.
- Separate UI responsibilities.

---

## 4. Property Data

Prompt:

"Create a simple property data object containing the property
title, location, rating, reviews, guests, bedrooms, beds,
bathrooms, price, images, host and amenities."

Purpose:

- Keep property information separate from UI components.
- Allow components to consume shared data.

---

## 5. Navigation Bar

Prompt:

"Create an Airbnb-style desktop navigation bar with a logo,
search controls, hosting option, language button and menu button."

Purpose:

- Reproduce the main navigation structure.
- Add basic interactions.

---

## 6. Property Header

Prompt:

"Create the property header with title, rating, reviews,
location, Share and Save controls."

Purpose:

- Reproduce the listing header.
- Add Share and Save interactions.

---

## 7. Photo Gallery

Prompt:

"Create a desktop Airbnb-style photo gallery with one large
image, four smaller images and a Show all photos button."

Purpose:

- Reproduce the listing photo layout.
- Allow users to open the Photo Tour.

---

## 8. Photo Tour

Prompt:

"Create a full-screen Photo Tour displaying all property images
in a responsive desktop grid. Allow every image to open the Lightbox."

Purpose:

- Implement the required Photo Tour view.
- Make all photos interactive.

---

## 9. Lightbox

Prompt:

"Create a full-screen Lightbox with close, previous and next
controls, photo counter and keyboard navigation."

Purpose:

- Implement the required Lightbox behavior.
- Support Escape, ArrowLeft and ArrowRight.

---

## 10. Booking Card

Prompt:

"Create an Airbnb-style booking card showing price, dates,
guests and Reserve controls. Add simple frontend interactions."

Purpose:

- Reproduce the booking card.
- Demonstrate interactive behavior.

---

## 11. Property Information

Prompt:

"Create the property information section with host details,
description, Show more and amenities with Show all amenities."

Purpose:

- Add listing information.
- Implement expandable content.

---

## 12. Accessibility Review

Prompt:

"Review the implemented Airbnb clone for keyboard navigation,
focus states, accessible names, image alt text, Lightbox keyboard
controls and semantic HTML."

Purpose:

- Identify accessibility improvements.
- Preserve existing functionality.

---

## 13. Visual Review

Prompt:

"Review the Airbnb clone for visual differences in layout,
spacing, typography, gallery, buttons, booking card, Photo Tour
and Lightbox."

Purpose:

- Identify visual inconsistencies.
- Improve visual fidelity.

---

## 14. Final Testing

Prompt:

"Test the complete application flow and identify broken
interactions, missing images, console errors and navigation issues."

Purpose:

- Perform final quality checks.
- Verify the complete user journey.

---

## Development Approach

AI assistance was used incrementally.

Each major component was implemented and tested independently
before moving to the next component. Existing working behavior
was preserved while new interactions were added.