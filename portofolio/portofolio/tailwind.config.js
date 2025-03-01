/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      black: "#222831",
      white: "#F7F7F7",
      gray: "#393E46",
      lightGray: "#697565",
      orange: "#FD7014",
      darkOrange: "#EB5B00",
      lightOrange: "#fdaa48",
      blue: "#2196F3",
      lightblue: "#90D5FF",
    },
    extend: {
      boxShadow: {
        blueShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        blueMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ["Roboto"],
    },
  },
  plugins: [],
};
