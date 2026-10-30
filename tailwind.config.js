/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a',
          'navy-light': '#1e3a8a',
          saffron: '#f59e0b',
          'saffron-light': '#fcd34d',
          gold: '#d97706',
          cream: '#fffbeb',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.95) 100%)',
      },
      boxShadow: {
        'saffron': '0 0 30px rgba(245,158,11,0.4)',
        'saffron-lg': '0 0 60px rgba(245,158,11,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.2)',
        'card': '0 10px 40px rgba(0,0,0,0.1)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.2)',
      },
      animation: {
        'slow-zoom': 'slowZoom 12s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
