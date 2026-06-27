import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2a44",
        "ink-soft": "#4a5670",
        muted: "#7a87a3",
        line: "#e6ecf6",
        brand: {
          DEFAULT: "#2f6bff",
          deep: "#2454d6",
          cyan: "#38bdf8",
        },
        point: { DEFAULT: "#f5a623", hi: "#ffd34d" },
        soft: "#f4f7fc",
        panel: "#eef3fb",
        dark: "#15213f",
        coral: "#f5663b",
        card: {
          pink: "#fdeef2",
          green: "#eaf7f0",
          purple: "#f0eefb",
          orange: "#fdf3e6",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "system-ui", "sans-serif"],
        num: ['"Inter"', '"Noto Sans JP"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 18px rgba(31,42,68,.06)",
        card: "0 10px 30px rgba(36,84,214,.08)",
        cta: "0 12px 28px rgba(47,107,255,.40)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: { to: { backgroundPosition: "200% center" } },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.16,1,.3,1) both",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
