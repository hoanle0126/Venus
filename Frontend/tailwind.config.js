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
        "gray-light": "#DCDCDC",
        "gray-dark": "#99a1b7",
        black: "#000000",
        dark: "#333",
        white: "#FFFFFF",
        green: "#80BB01",
        "green-dark": "#5D8801",
        "green-light": "#3fe044",
        wood: "#5B2C24",
      },
      fontSize: {
        default: "1.4rem",
        sm: "1.4rem",
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
