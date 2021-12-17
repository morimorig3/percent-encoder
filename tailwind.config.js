module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%,': { transform: 'translateY(0)', opacity: '1' },
          '80%,': { opacity: '1' },
          '100%': { transform: 'translateY(-10px)', opacity: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1.5s forwards',
      },
    },
  },
  plugins: [],
};
