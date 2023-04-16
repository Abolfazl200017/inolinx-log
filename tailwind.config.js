/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3f51b5',
        'lightPrimary': '#1e88e5',
        'llPrimary': '#e8f0fe',
        'inputBg': '#80808030',
        'secondary': '#e61a58',
        'warn': '#f44336',
        'lightCardBg': '#ffffff',
        'darkCardBg': '#424242',
        'darkBorder': '#595959',
        'lightBorder': '#c8c8c8',
        'darkPrimary': '#3f51b547',
      },
    },
  },
  plugins: [],
}
