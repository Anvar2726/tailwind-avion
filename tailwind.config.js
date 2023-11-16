/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        //lg: "20px",
      },
      screens: {
        DEFAULT: "1240px",
        lg: "1386px",
      },
    },
    extend: {
      colors:{
        "nav-color":"#726E8D",
        "blue-500":"#2A254B",
        "light-grey":"#F9F9F9",
      },
    },
  },
  plugins: [],
}