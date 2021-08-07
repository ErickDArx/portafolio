const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './src/views/*.html',
    './src/app/components/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"', 'sans-serif'],
        'Poppins': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
