const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [
    '/src/views/*.html',
    '/src/*/*.js',
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
