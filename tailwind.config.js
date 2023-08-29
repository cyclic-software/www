/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', 'sans-serif'],
        'display': ['Titillium Web']
      },
      colors: {
        'primary': '#3868E3'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
