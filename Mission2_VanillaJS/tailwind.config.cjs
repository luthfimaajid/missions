const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.js"
  ],
  theme: {
    screens: {
      'xxsm': '390px',
      'xsm': '450px', 
      ...defaultTheme.screens
    },
    extend: {
      screens: {
      }
    },
  },
  plugins: [],
}
