/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {},
    fontFamily: {
      varela: ["Varela Round", "sans-serif"],
      madimi: ["Madimi One", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },

  plugins: [],
};
