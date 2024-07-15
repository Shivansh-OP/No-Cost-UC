/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        customFont: [ 'Teko', 'sans-serif' ]
      },
      colors: {
        primaryColor: '#38B000',
        secondaryColor: '#70E000',
      },
    },
  },
  plugins: [],
}

