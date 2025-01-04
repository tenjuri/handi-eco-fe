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
        "100%": { transform: "translateX(-300%)" },
      },
      "mb-slide": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-300%)" },
      },
      "fade-in-right": {
        "0%": {
          opacity: "0",
          transform: "translate3d(100%, 0, 0)",
        },
        "10%": {
          opacity: "0",
          transform: "translate3d(90%, 0, 0)",
        },
        "100%": {
          opacity: "1",
          transform: "translate3d(0, 0, 0)",
        },
      },
    },
    animation: {
      slide: "slide 4s linear infinite",
      "mb-slide": "mb-slide 3s linear infinite",
      fadeinright: "fade-in-right 1s ease-in-out 0.25s 1",
    },
  },
  plugins: [],
} satisfies Config;
