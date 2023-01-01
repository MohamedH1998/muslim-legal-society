/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ivory-paper': '#E6DEC9',
        'grim-reaper': '#0B103A',
        'silk-pillow': '#F3F0EB',
        'mountains-green': '#2D6A4F',
        'orochimaru': '#D9D9D9',
        'lucky-grey': '#4F4F4F',
        'monarch-gold': '#B47D3D'
      },
      fontFamily: {
        'primary': 'Montserrat'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
