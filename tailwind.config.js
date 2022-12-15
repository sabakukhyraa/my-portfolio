/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#707070",
        semigray: "#A0A0A0",
        gray: "#C6C6C6",
        back: {
          DEFAULT: "#181A20",
          "front": "#23242E",
          "fronter": "#414453"
        },
      }
    },
  },
  plugins: [],
}