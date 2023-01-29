/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#111016",
        primaryColor: "#a4ffaf",
        blackColor: "#18171f",
        whiteSmoked: "#e2e1e7",
        gray: "#54535b",
        darkerGray: "#24232b"
        }
    },
  },
  plugins: [],
};