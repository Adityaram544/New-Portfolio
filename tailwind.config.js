// tailwind.config.js — Tailwind CSS configuration
/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add custom font families
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      }
    },
  },
  plugins: [],
};
