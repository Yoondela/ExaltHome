/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/next-navigation/index.jsx",
    "./src/**/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        exaltColour: '#58a4b0'
      }
    },
  },
  plugins: [],
}
