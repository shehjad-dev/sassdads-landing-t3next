/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkText: "#02073E",
        lightText: "#4D555E",
        primary: "#fcb645",
        secondary: "#faefdd",
      },
    },
  },
  plugins: [],
};
