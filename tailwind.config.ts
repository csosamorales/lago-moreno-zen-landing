import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// mapped by claude
				beige: '#f2ece2', //grey / dawn-pink
				'beige-dark': '#e3d9c8',
				brown: '#6b4f35', //shingle-fawn
				'brown-dark': '#3e2c1c', //black-marlin
				gold: '#b08850', //driftwood
				'gold-light': '#d4aa72', //whiskey / 64
				cream: '#faf8f4',
				ink: '#2e2318', // 14 / oil

				// mapped by builder.io
				marlin: '#3E2C1C',
				oil: '#2E2318',
				'shingle-fawn': '#6B4F35',
				whiskey: '#D4AA72',
				'whiskey-dark': '#B08850',
				'dawn-pink': '#F2ECE2',
				driftwood: '#b08850', 
				surface: '#E2D6BF', //beige
			},
			fontFamily: {
				raleway: ['var(--font-raleway)', 'sans-serif'],
			},
			fontSize: {
				xxs: '10px',
			},
			borderRadius: {
				DEFAULT: '0',
				none: '0',
				sm: '0',
				md: '0',
				lg: '0',
				xl: '0',
				'2xl': '0',
				'3xl': '0',
				full: '9999px',
			},
		},
	},
	plugins: [],
};
export default config;
