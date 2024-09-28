/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ".src/*.{jsx,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#495E57',
        'secondary': '#F4CE14',
        'card': '#EDEFEE',
        'money': '#EE9972'
      }
    },
  },
  plugins: [],
}

