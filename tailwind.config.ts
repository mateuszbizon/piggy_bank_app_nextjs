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
				"secondary-1": "#BFD7EA",
				"third-1": "#0B3954",
				"light-1": "#fff",
				"light-2": "#e6e6e6",
				"light-3": "#f2f2f2",
				"error": "#C81D25",
				"error-2": "#FF5A5F",
				"shadow": "#8080804d",
			},
		},
	},
	plugins: [],
};
export default config;
