/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("@tailwindcss/aspect-ratio")],
	theme: {
		extend: {
			fontFamily: {
				garamond: ['garamond', 'serif'],
				fatface: ['fatface', 'display'],
				nautigal: ['nautigal', 'script']
			},
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
					900: '#272b38'
				},
				secondary: '#ffb806',
				error: '#b32918'
			}
		}
	}
};
