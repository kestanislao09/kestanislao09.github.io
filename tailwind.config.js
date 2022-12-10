/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,vue,html}"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480',
      md: '735',
      lg: '980',
    }
  },
  plugins: [],
}
