/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3f51b5',
        'lightPrimary': '#1e88e5',
        'llprimary': '#e8f0fe',
        'inputBg': '#80808030',
      },
    },
  },
  plugins: [],
}
