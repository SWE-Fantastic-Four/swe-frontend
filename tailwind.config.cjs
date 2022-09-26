/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'off-white': '#FFFCFC',
        'light-gray': '',
        'gray': '#D9D9D9',
        'dark-gray': '#696868',
        'light-green': '#BCDD85',
        'dark-green': '#70C174'
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Jaldi', 'sans-serif']
      },
    },
  },
  plugins: [],
}
