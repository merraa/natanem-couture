# Natanem Couture Business Website

## Home of Elegance and Style - The First Haute Couture Hat Makers in Ethiopia

This project is a modern, responsive business website for Natanem Couture, a distinguished clothing brand and the pioneering haute couture hat maker in Ethiopia. Designed to showcase their unique blend of traditional artistry and contemporary elegance, this website provides a digital storefront and brand presence.

## Features

* **Responsive Design:** Optimized for seamless viewing across various devices (mobile, tablet, desktop).

* **Dynamic Hero Section:** Features a captivating background image carousel with a smooth fade effect, showcasing the brand's elegance.

* **Comprehensive About Section:** Detailed information about Natanem Couture as a brand and a dedicated section introducing the visionary designer, Natanem Wondeson.

* **Collections Overview:** A section to highlight different product categories (Hats, Apparel, Accessories).

* **Contact Information:** Clear contact details and a placeholder contact form for inquiries.

* **Smooth Scrolling Navigation:** Easy navigation between sections of the single-page application.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.

* **Vite:** A fast frontend build tool that significantly improves the development experience.

* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

* **Lucide React:** A collection of beautiful, open-source icons for React applications.

## Project Structure

The project follows a component-based architecture for maintainability and scalability:
```bash
natanem-couture/
├── src/
│   ├── App.jsx                // Main application component
│   ├── main.jsx               // React DOM rendering entry point
│   ├── index.css              // Global styles (Tailwind CSS imports)
│   ├── components/            // Reusable UI components
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── CollectionsSection.jsx
│   │   ├── CollectionCard.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── assets/                // Static assets like images, fonts
│   └── utils/                 // Utility functions
│       └── helper.js         // Contains scrollToSection helper
├── tailwind.config.js         // Tailwind CSS configuration
├── postcss.config.js          // PostCSS configuration for Tailwind
├── package.json               // Project dependencies and scripts
└── README.md                  // This file

```
