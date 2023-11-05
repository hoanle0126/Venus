/** @type {import('tailwindcss').Config} */
export default {
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
        white: "#FFFFFF",
        "blue-light": "#0A72EB",
        "blue-dark": "#006CEA",
      },
      fontSize: {
        sm: "1.4rem",
        md: "2.3rem",
        lg: "3.2rem",
      },
    },
  },
  plugins: [],
};
