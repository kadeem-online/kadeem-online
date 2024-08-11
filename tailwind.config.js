/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			screens: {
				xs: "480px",
			},
			colors: {
				"ko-off-white": "#fcffff",
				"ko-light-cyan": "#e2f8f6ff",
				"ko-mint-green": "#c5f1edff",
				"ko-celeste": "#a7eae3ff",
				"ko-tiffany-blue": "#78d1c8ff",
				"ko-verdigris": "#4eb2a8ff",
				"ko-dark-cyan": "#249387ff",
				"ko-pine-green": "#1d766cff",
				"ko-brunswick-green": "#165851ff",
				"ko-brunswick-green-2": "#0f3b36ff",
				"ko-rich-black": "#071d1bff",
				"ko-raspberry": "#d81159ff",
				"ko-quinacridone-magenta": "#8f2d56ff",
			},
			container: {
				center: true,
			},
			fontFamily: {
				oswald: ["Oswald", "ui-sans-serif"],
				"special-elite": ["Special Elite", "ui-monospace"],
				"amatic-sc": ["Amatic SC", "ui-sans-serif"],
			},
		},
	},
	plugins: [],
};
