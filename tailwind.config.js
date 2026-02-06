/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatLine: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        floatHeart: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },

      animation: {
        floatHeart: 'floatHeart 3s ease-in-out infinite',
        floatLine: 'floatLine 4s ease-in-out infinite',
        glow: 'glow 5s ease-in-out infinite',
      },

      fontFamily: {
        romantic: ['"Dancing Script"', 'serif'],
      },
    },
  },
  plugins: [],
}
