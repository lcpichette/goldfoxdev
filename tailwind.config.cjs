module.exports = {
  purge: [
    './src/components/*.svelte',
    './src/components/nav/*.svelte',
    './src/routes/*.svelte'
  ],
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
          100: '#b9bdce',
          200: '#a3a9be',
          300: '#8b91ad',
          400: '#6e7698',
          500: '#59607d',
          600: '#474d65',
          700: '#393e50',
          800: '#303444',
          900: '#272b38',
        },
        secondary: '#ffb806'
      }
    }
  }
}
