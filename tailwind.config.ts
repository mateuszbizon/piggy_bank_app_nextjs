import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": "#087E8B",
				"primary-2": "#0baabc",
				"primary-disabled": "#05535c",
				"light-1": "#fff",
				"light-2": "#e6e6e6",
				"light-3": "#f2f2f2",
				"error": "#C81D25",
			},
		},
	},
	plugins: [],
};
export default config;
