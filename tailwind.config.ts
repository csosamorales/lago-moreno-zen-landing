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
				beige: '#f2ece2', //grey
				'beige-dark': '#e3d9c8',
				brown: '#6b4f35',
				'brown-dark': '#3e2c1c',
				gold: '#b08850',
				'gold-light': '#d4aa72',
				cream: '#faf8f4',
				ink: '#2e2318', // 14
				surface: '#E2D6BF',
			},
			fontFamily: {
				raleway: ['var(--font-raleway)', 'sans-serif'],
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
