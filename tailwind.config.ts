import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				jeju: ["var(--font-jeju-myeongjo)", "Nanum Myeongjo", "serif"],
				roboto: ["var(--font-roboto)", "Roboto", "sans-serif"],
				road: ["var(--font-road-rage)", "Road Rage", "cursive"],
			},
			fontSize: {
				base: ["1rem", "1.25"], // 1rem font size with 1.2 line-height
			},
			colors: {
				background: "var(--background)",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "var(--accent-foreground)",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				nav: "rgba(5, 37, 44, 0.40)",
				upload: "rgba(36, 160, 181, 0.50)",
			},
			borderRadius: {
				lg: "calc(var(--radius) + 2px)",
				md: "var(--radius)",
				sm: "calc(var(--radius) - 2px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
