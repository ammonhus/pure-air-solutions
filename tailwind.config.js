/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8eef5',
          100: '#c5d5e9',
          200: '#9eb9d9',
          300: '#769cc9',
          400: '#5685be',
          500: '#3670b3',
          600: '#2c60a1',
          700: '#1B4F8A',
          800: '#164272',
          900: '#0e2d50',
          950: '#07182c',
        },
        green: {
          50:  '#edf4ef',
          100: '#d0e5d6',
          200: '#b0d3ba',
          300: '#8ec19e',
          400: '#72b387',
          500: '#4A7C59',
          600: '#3f6b4c',
          700: '#325a3e',
          800: '#254931',
          900: '#183823',
        },
        cream: {
          50:  '#fdfcfa',
          100: '#F8F5F0',
          200: '#f0ebe2',
          300: '#e7e0d4',
          400: '#ded5c6',
          500: '#d4c9b5',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(27, 79, 138, 0.15)',
        'glass-lg': '0 25px 50px 0 rgba(27, 79, 138, 0.2)',
        'glow': '0 0 40px rgba(27, 79, 138, 0.4)',
        'glow-green': '0 0 40px rgba(74, 124, 89, 0.4)',
      },
    },
  },
  plugins: [],
}
