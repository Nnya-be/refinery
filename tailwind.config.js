/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#A79277',
        secondary: '#D1BB9E',
        tertiary: '#EAD8C0',
        quaternary: '#FFF2E1',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
