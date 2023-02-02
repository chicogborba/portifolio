/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        Questrial: ['"Questrial"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
