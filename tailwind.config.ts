import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["var(--font-instrument)", "serif"],
        fraunces: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "#f4ecd8",
        ink: "#0f0f1a",
        vermillion: "#a81d22",
        ochre: "#d4902a",
        indigo: "#6aa3d4",
        moss: "#7ab36a",
      },
    },
  },
  plugins: [],
};
export default config;
