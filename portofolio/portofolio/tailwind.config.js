/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#222831",
      white: "#F7F7F7",
      gray: "#393E46",
      lightGray: "#697565",
      orange: "#FD7014",
      darkOrange: "#EB5B00",
      blue: "#2196F3",
    },
    extend: {},
    fontFamily: {
      body: ["Jpsefin Sans"],
      special: ["Roboto"],
    },
  },
  plugins: [],
};
