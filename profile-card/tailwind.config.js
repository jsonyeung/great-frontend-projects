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

    extend: {
      size: {
        'avatar': '3.75rem'
      }
    }
  },

  plugins: [],
}

