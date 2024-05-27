/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#343434',
        secondary: '#E6B31E',
        tertiary: '#FCFAF1',
        quaternary: '#CACACA',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
