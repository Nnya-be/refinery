/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#343434',
        secondary: '#E6B31E',
        shadesecondary: {
          DEFAULT: '#FFCD3C',
          200: '#FFD75F',
        },
        tertiary: '#FCFAF1',
        quaternary: '#CACACA',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
}