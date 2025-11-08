/**
 * ==============================================================================
 * Knights Legacy Fund Website - Tailwind config (tailwind.config.js)
 * ==============================================================================
 *
 * Tailwind CSS configuration file for the Knights Legacy Fund React site.
 *
 * This file customizes Tailwind's default theme by:
 *  - Specifying content paths for class scanning (PurgeCSS optimization)
 *  - Extending the color palette with official Knights Legacy Fund branding
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2025 Knights Legacy Fund. All rights reserved.
 *
 * ===========================================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
  // Define where Tailwind should look for HTML/JSX/TSX files to scan for classes.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define custom colors based on Las Lomas High School
      colors: {
        'llhs-maroon': '#5C000A', // Deep Maroon/Red (Primary)
        'llhs-gold': '#FFD700', // Bright Gold (Accent)
        'llhs-light': '#F8F8F8', // Off-white for clean backgrounds
        'llhs-dark': '#333333', // Dark text color
      },
    },
  },
  plugins: [],
}