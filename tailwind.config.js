/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "859px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#3195ff",
      black: "#000",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      md: ["1.2rem", "1.5"],
      lg: ["1.5rem", "1.4"],
      xl: ["2rem", "1.3"],
      "2xl": ["2.5rem", "1.2"],
      "4xl": ["4rem", "1.4"],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
