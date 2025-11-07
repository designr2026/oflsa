/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ofl-blue': '#241afe',
        'ofl-yellow': '#fbbf24',
        blue: {
          50: '#e8e7ff',
          100: '#d1cfff',
          200: '#a39fff',
          300: '#756fff',
          400: '#473fff',
          500: '#241afe',
          600: '#241afe',
          700: '#241afe',
          800: '#1d15cb',
          900: '#241afe',
        },
      },
      fontFamily: {
        'sans': ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
