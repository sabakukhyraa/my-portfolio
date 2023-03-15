/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1174px",
      "3xl": "1374px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        darkgray: "#707070",
        semigray: "#A0A0A0",
        gray: "#C6C6C6",
        back: {
          DEFAULT: "#181A20",
          front: "#23242E",
          fronter: "#414453",
        },
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "inset 0px 0px 41px -10px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
