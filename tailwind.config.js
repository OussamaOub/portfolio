const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        lg: { min: "768px" },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
