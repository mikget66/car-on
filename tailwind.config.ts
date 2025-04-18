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
        brandColor: "rgba(var(--brandColor))",
        bgdark: "rgba(var(--bgdark))",
        invert: "rgba(var(--text))",
        light:"rgba(var(--bglight))",
        textlight:"rgba(var(--text-second))",
      },
      backgroundImage: {
        CarImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0) 100%), url('/images/background/main.jpeg')",
        blogImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0) 100%), url('/images/background/blog-bg1.jpeg')",
      },
    },
    fontFamily: {
      caveatRegular: "var(--font-caveat-regular)",
      caveatMedium: "var(--font-caveat-medium)",
      caveatSemiBold: "var(--font-caveat-semibold)",
      caveatBold: "var(--font-caveat-bold)",
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
