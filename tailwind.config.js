/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/main.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      fontFamily: {
        Custom: ["Rubik", "sans-serif"],
      },

      colors: {
        "custom-grey": "#d9d9d9",
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
  },
  plugins: [],
};
