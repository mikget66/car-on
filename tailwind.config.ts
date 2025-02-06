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
        background: "rgba(var(--background))",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        brandColor: "rgba(var(--brandColor))",
        light:"rgba(var(--bglight))",
        textlight:"rgba(var(--text-second))",
      },
      backgroundImage: {
        CarImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0) 100%), url('/images/main.jpeg')",
      },
    },
    fontFamily: {
      Caveat: ["var(--font-caveat)"],
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
