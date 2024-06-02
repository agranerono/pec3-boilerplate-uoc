/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#34495E',
        secondary: '#16A085',
        'light-gray': '#efefef',
        'dark-gray': 'rgba(0, 0, 0, 0.5)',
        'dark-blue': '#1A252F',
        black: '#343a40',
        white: '#fff',
        background: '#f8f9fa',
      },
      fontSize: {
        base: '1rem',
        large: '3rem',
        medium: '1.5rem',
      },
      spacing: {
        base: '1rem',
        large: '2rem',
      },
      boxShadow: {
        default: '0 5px 5px 5px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        md: '512px',
        lg: '720px',
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

