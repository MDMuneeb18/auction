/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43BFDA",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
