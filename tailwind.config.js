/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'tv-static': 'tv-static-animation 0.1s infinite',
        'tv-on': 'tv-on 2s ease-out',
        'glitch': 'glitch 1s infinite',
        'portal-swirl': 'portal-swirl 1s ease-out forwards',
      },
      keyframes: {
        'tv-static-animation': {
          '0%': { backgroundPosition: '0 0' },
          '20%': { backgroundPosition: '20% -20%' },
          '40%': { backgroundPosition: '-20% 20%' },
          '60%': { backgroundPosition: '10% 30%' },
          '80%': { backgroundPosition: '-10% -10%' },
          '100%': { backgroundPosition: '0 0' },
        },
        // ... other keyframes as defined in the CSS above
      },
    },
  },
  plugins: [],
};
