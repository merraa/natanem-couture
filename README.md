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
## Setup Instructions

Follow these steps to get the project up and running on your local machine:

1.  **Clone the Repository:**

    ```
    git clone [your-repository-url]
    cd natanem-couture

    ```

    *(Replace `[your-repository-url]` with the actual URL of your GitHub repository.)*

2.  **Create React App with Vite (in current directory):**

    ```
    npm create vite@latest . -- --template react
    # Or if you prefer yarn:
    # yarn create vite . --template react

    ```

    *When prompted, select `React` and then `JavaScript`.*

3.  **Install Dependencies:**

    ```
    npm install
    # Or:
    # yarn install

    ```

4.  **Install Tailwind CSS and its dependencies:**

    ```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    # Or:
    # yarn add -D tailwindcss postcss autoprefixer
    # yarn tailwindcss init -p

    ```

5.  **Configure Tailwind CSS:**
    Open `tailwind.config.js` and ensure the `content` array is set up to scan your React files:

    ```javascript
    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }

    ```

6.  **Add Tailwind Directives to CSS:**
    Open `src/index.css` and add the following at the very top:

    ```css
    /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
      font-family: 'Inter', sans-serif;
    }

    /* Carousel specific CSS for fade effect */
    .carousel-image {
        transition: opacity 1s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ```

7.  **Install Lucide React Icons:**

    ```
    npm install lucide-react
    # Or:
    # yarn add lucide-react

    ```

8.  **Place Your Images:**
    Create `src/assets/images/` and place your actual image files there. Update the `import` paths in `HeroSection.jsx` and `AboutSection.jsx` to match your image filenames.

9.  **Copy Component Code:**
    Copy the code for `Header.jsx`, `HeroSection.jsx`, `AboutSection.jsx`, `CollectionsSection.jsx`, `CollectionCard.jsx`, `ContactSection.jsx`, `Footer.jsx` into their respective files in `src/components/`. Also, create `src/utils/helpers.js` and paste the `scrollToSection` function. Ensure `src/App.jsx` and `src/main.jsx` are updated to import and use these components correctly.

10. **Run the Development Server:**

    ```
    npm run dev
    # Or:
    # yarn dev

    ```

    The website should now be running at `http://localhost:5173` (or similar).

## Future Enhancements

* **Full Image Gallery/Portfolio:** Create dedicated pages or a more extensive gallery for Natanem Couture's collections.

* **E-commerce Functionality:** Integrate a shopping cart and checkout process if products are to be sold online.

* **Backend for Contact Form:** Implement a server-side solution to handle contact form submissions.

* **Testimonials/Client Showcase:** Add a section for client reviews or featured clients.

* **Blog/News Section:** Share updates, fashion insights, or behind-the-scenes content.

* **Animations and Micro-interactions:** Enhance user experience with subtle animations.

* **Accessibility Improvements:** Ensure the website is fully accessible to users with disabilities.

