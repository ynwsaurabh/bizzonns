import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
        'custom-purple-light': 'rgba(101, 47, 142, 0.88)',
        'custom-purple-dark': 'rgba(125, 46, 185, 0.45)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(101, 47, 142, 0.88) 0%, rgba(125, 46, 185, 0.45) 100%)',
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
