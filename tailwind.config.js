/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#737373",       // Soft medium gray
        yellow: "#fbf0b3",     // Pastel yellow
        darkyellow: "#EAB308", // Rich gold-yellow
        orange: "#FB923C",     // Soft orange
      },
    },
    
  },
  plugins: [],
}