# Technical Documentation

## Tech Stack

- **HTML5**: semantic structure for content
- **CSS3**: variables, Flexbox, Grid, and media queries
- **JavaScript (ES6)**: interactivity and progressive enhancement

## Components

- **Header & Navigation**

  - Sticky header with brand name
  - Mobile nav toggle (accessible aria attributes)
  - Theme toggle persisted in `localStorage`

- **Hero Section**

  - Time-based greeting (morning/afternoon/evening)
  - Tagline and CTA button

- **About Section**

  - Grid layout with profile image
  - Short academic/professional intro

- **Projects Section**

  - Responsive card grid
  - Private projects marked with lock icon
  - Public projects link to GitHub repos

- **Skills Section**

  - Chip-style skill list (technical & soft skills)
  - Theme-aware styling

- **Certifications Section**

  - Grid layout with issuer, description, and PDF link

- **Contact Section**

  - Accessible form with HTML5 validation
  - Success note using `role="status"`

- **Footer**
  - Dynamic year rendering
  - Back-to-top link

## Responsiveness

- **900px** → About, Projects, and Certifications adjust to 2 columns
- **600px** → Nav collapses into a toggle menu, cards stack to 1 column

## Accessibility

- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`
- Form labels bound to inputs
- Live region (`role="status"`) for form feedback
- Color contrast checked for light and dark themes

## Known Limitations

- No backend integration (contact form is client-only)
- Placeholder images/logos used for some assets
- Private projects not linked to source code
