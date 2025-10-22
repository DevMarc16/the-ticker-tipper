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
        gold: {
          DEFAULT: '#f9a825',
          dark: '#f57c00',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
