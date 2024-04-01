/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary-background': '#0A1930',
      'primary-title': '#CDD6F6',
      grey: '#D9D9D9',
      neon: '#64FFDA',
    },
    fontFamily: {
      roboto: ['Roboto Mono', 'monospace'],
    },
    extend: {
      rotate: {
        '-90': '-90deg',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
