/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'cyber-blue': '#06b6d4',
        'cyber-green': '#10b981',
        'cyber-purple': '#8b5cf6',
        'cyber-pink': '#ec4899',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
          },
          '100%': {
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}; 