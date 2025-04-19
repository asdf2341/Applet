Sure! Here's a complete and well-structured `README.md` file for your **landing-m3: Interactivity** project:

---

# 🚀 landing-m3: Interactivity

This project brings interactivity and dynamic user experiences to a multi-page website using **pure JavaScript**, **HTML**, and **CSS**—without relying on any external libraries or frameworks.

## 📌 Overview

The goal of this project is to enhance the **Main** and **Projects** pages with advanced JavaScript features to improve usability and engagement. These include a responsive burger menu, smooth scrolling, a content slider, FAQ accordion, theme persistence, and dynamic content filtering.

---

## 🎯 Features

### ✅ 1. **Burger Menu**
- Fully responsive on screens ≤599px.
- Smooth slide-in/slide-out transitions.
- Closes automatically when a link is clicked or screen resizes.

### ✅ 2. **Scroll-to-Top Button**
- Appears after scrolling 300px.
- Smooth scrolls to the top.
- Uses `window.scrollTo({ behavior: "smooth" })`.

### ✅ 3. **Slider (Testimonials Section)**
- Automatic slide every 3 seconds.
- Pause/resume on hover or touch.
- Dot navigation included.

### ✅ 4. **Random Projects Section**
- Loads 3 **random** projects on each refresh from `projects.json`.
- Each project card shows:
  - Title
  - Description
  - Technologies used
  - **Dynamic duration formatting**:
    - "3 days", "2 weeks", or "5 months"

### ✅ 5. **Project Page Filter**
- Filters projects dynamically based on:
  - `All`
  - `Websites`
  - `Applications`
- Real-time updates without reloading.

### ✅ 6. **FAQ Accordion**
- Expands/collapses answers smoothly.
- Only one open at a time (optional for cleaner UX).

### ✅ 7. **Saved Theme Preference**
- Dark/light mode toggle.
- Saves user preference in `localStorage`.
- Automatically applied on revisit.

---

## 🧠 Learning Objectives

- JavaScript Fundamentals
- DOM & BOM Manipulation
- Event Listeners & Delegation
- LocalStorage for State Persistence
- Dynamic UI Updates
- Slider/Accordion Logic Implementation

---

## 💾 Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6+)**

No external CSS/JS libraries used (no Bootstrap, Tailwind, jQuery, etc.)

---

## 📁 Folder Structure

```
landing-m3/
│
├── index.html
├── projects.html
├── styles/
│   ├── main.css
│   └── dark-theme.css
├── scripts/
│   ├── burgerMenu.js
│   ├── scrollToTop.js
│   ├── slider.js
│   ├── faqAccordion.js
│   ├── theme.js
│   ├── randomProjects.js
│   └── projectFilter.js
├── assets/
│   ├── projects.json
│   └── images/
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/landing-m3.git
   cd landing-m3
   ```

2. **Open `index.html` in your browser**
   - No server setup required.

3. **Ensure JS is enabled**
   - The interactivity relies on client-side scripts.

---

## 🔍 Live Preview

> You can deploy this project on [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), or [Vercel](https://vercel.com/) for a live demo.

---

## ✅ Requirements

- Passes W3C HTML & CSS validators
- Runs with **no console errors**
- Works on all modern browsers
- Pixel-perfect based on Figma design

---

## 📦 Assets

- **projects.json**: Contains metadata for all projects (used in both homepage and project filter).
- **Figma design**: Used to match structure and layout exactly.

---

## 🧪 Testing Checklist

| Feature             | Tested ✅ |
|---------------------|-----------|
| Burger Menu         | ✅        |
| Scroll to Top       | ✅        |
| Slider              | ✅        |
| Random Projects     | ✅        |
| FAQ Accordion       | ✅        |
| Project Filter      | ✅        |
| Theme Persistence   | ✅        |

---

## ✨ Acknowledgements

This project is part of the **M3 Module** of the Frontend learning path. Special thanks to all mentors and contributors who helped shape this interactive user experience.

---

## 🧠 Bonus Tips

- You can use `IntersectionObserver` for scroll-based features.
- Store theme and filter states in `localStorage` to persist across sessions.

---

Let me know if you'd like a version written in **Russian** or **Kazakh**, or customized for a school/university project!

#### Theme Switching

- Realize toggle button (e.g., a switch or button) in the header to allow users to switch between themes.
- Realize toggle button using only HTML & CSS.
- Use **CSS Variables** to define theme colors and apply them throughout the stylesheet.

