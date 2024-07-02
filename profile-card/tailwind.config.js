/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      sans: ['Noto Sans Variable', 'sans-serif']
    },

    boxShadow: {
      md: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
    }
  },

  plugins: [],
}

