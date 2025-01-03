import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-app": "#23464F",
        "gold-app": "#CCAB7D",
      },
    },
    keyframes: {
      slide: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
      "mb-slide": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-200%)" },
      },
    },
    animation: {
      slide: "slide 6s linear infinite",
      "mb-slide": "mb-slide 6s linear infinite",
    },
  },
  plugins: [],
} satisfies Config;
