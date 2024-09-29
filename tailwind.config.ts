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
        white: "#E5E7EB",
        black: "#121826",
        primary: {
          light: "#845EEE",
          dark: "#652CD1",
        },
        gray: {
          light: "#4D5562",
          medium: "#394150",
          dark: "#212936",
          brown: "#A1A1A9",
        },
      },
    },
  },
  plugins: [],
};
export default config;
