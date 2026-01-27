/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          soft: '#111111'
        },
        accent: {
          DEFAULT: '#3b82f6'
        }
      },
      boxShadow: {
        'soft-blue': '0 0 40px rgba(59,130,246,0.25)'
      }
    }
  },
  plugins: []
};

