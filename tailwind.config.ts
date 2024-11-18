import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dbNav: "rgb(23 37 84)",
        lbBackground: "rgb(191 219 254)",
      },
      fontSize: {
        'responsiveHeader': 'clamp(0.75vw, 2vw, 3vw )',
      },
    },
  },
  plugins: [],
} satisfies Config;
