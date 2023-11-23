/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      pop: ["Poppins", "cursive"],
      int: ["Inter", "sans-serif"],
      spa: ["Space Grotesk","cursive"]
    },
  },
  plugins: [],
};

