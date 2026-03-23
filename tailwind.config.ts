import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f3f4ef",
        ink: "#11131a",
        panel: "#fefefe",
        brand: "#05668d",
        accent: "#00a896",
        warm: "#f9c74f"
      },
      boxShadow: {
        card: "0 10px 30px -18px rgba(17, 19, 26, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
