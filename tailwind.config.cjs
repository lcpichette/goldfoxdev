module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#b4c9f4',
          200: '#80a4ec',
          300: '#5081e5',
          400: '#1f5bd5',
          500: '#1949ab',
          600: '#133883',
          700: '#0F2C67',
          800: '#0b204a',
          900: '#091a3c',
        },
        secondary: '#F3950D'
      }
    }
  }
}
