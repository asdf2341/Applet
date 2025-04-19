# landing-m2: Responsive & Theming

## Learning Objectives

- CSS Media Queries
- CSS Variables
- Themes using CSS
- Adaptive and Responsive Design using CSS

## Abstract

In this project, you will enhance the static web page from Part 1 by making it responsive and implementing theme switching.

## Context

In today's digital landscape, websites must be accessible and visually appealing across a wide range of devices, from desktops to smartphones. Responsive design ensures that your website adapts seamlessly to different screen sizes, providing an optimal user experience. Additionally, theme switching allows users to personalize their experience, such as choosing between light and dark modes, which is increasingly expected in modern web applications.

## General Criteria

- The project must be written in vanilla HTML and CSS.
- You cannot use any other external CSS libraries or preprocessors (e.g., Bootstrap, Tailwind, Pug, SCSS, or LESS).
- The project must run without errors in the console on a modern browser.
- Ensure cross-browser compatibility.
- A pixel-perfect design should be implemented.

## Mandatory Part

### Responsive Design

You need to enhance the Main and Projects pages from Part 1 to be fully responsive.

The design should adapt to different screen sizes, including:

1. **Desktop (1440px and above)**:

   - The design should match the original Figma design for `1440px`.

2. **Intermediate Screens (600px - 1439px)**:

   - Since there is no specific design for screens between `1439px` and `600px`, the layout should fluidly adapt to these screen sizes.
   - Use CSS Grid, Flexbox, and media queries to ensure the content rearranges itself logically and remains usable.
   - Focus on maintaining readability, proper spacing, and usability without strict adherence to a specific design.

3. **Mobile (375px - 599px)**:
   - The design should match the provided Figma design for `375px`.
   - Optimize the layout for touch interactions, vertical scrolling, and smaller screens.
   - Ensure all interactive elements (e.g., buttons, links) are easily tappable.

#### Breakpoints

- **Mobile**: 375px - 599px
- **Intermediate**: 600px - 1439px
- **Desktop**: 1440px and above

### Theming

Implement a theme switching feature that allows users to toggle between light and dark themes. The theme should be applied consistently across all pages and should include:

- **Light Theme**: Default theme with light background and dark text.
- **Dark Theme**: Alternative theme with dark background and light text.

#### Theme Switching

- Realize toggle button (e.g., a switch or button) in the header to allow users to switch between themes.
- Realize toggle button using only HTML & CSS.
- Use **CSS Variables** to define theme colors and apply them throughout the stylesheet.

