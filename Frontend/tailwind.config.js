/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        red: "#F02D34",
        "gray-1": "#AAB9A2",
        "gray-light": "#DCDCDC",
        "gray-dark": "#99a1b7",
        black: "#000000",
        dark: "#12360A",
        white: "#FFFFFF",
        green: "#17C653",
        "green-dark": "#5D8801",
        "green-light": "#3fe044",
        wood: "#5B2C24",
      },
      fontSize: {
        default: "1.4rem",
        sm: "1.8rem",
        md: "2.3rem",
        lg: "3.2rem",
      },
      height: {
        "header-height": "100px",
      },
    },
  },
  plugins: [],
};
