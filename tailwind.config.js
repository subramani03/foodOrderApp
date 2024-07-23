/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '5xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }
    },
  },
  plugins: [],
}

