/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Your custom color palette
        'custom-bg': '#fbeeee',
        'custom-primary': '#e8505e',
        'custom-secondary': '#ececec',
        'custom-third': '#d5fdad',
        'custom-third-1': '#ebffd8',
        'custom-third-2': '#eaffd6',
        'custom-button': '#bbfdf5',
        'custom-border': '#000000',

        // Keep some Tailwind defaults but override primary
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#e8505e', // Your primary color
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        // Set Barlow as the default sans font
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        barlow: ['Barlow', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        'semi-bold': '600',
        bold: '700',
      },
      backgroundImage: {
        'gradient-first': 'linear-gradient(180deg, #f2edff 0%, #ffffff 100%)',
        'gradient-second':
          'linear-gradient(180deg, #dddddd 0%, #f5f5f5 71%, #ffffff 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
