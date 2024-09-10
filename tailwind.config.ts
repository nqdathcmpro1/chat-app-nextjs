import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "zalo-blue": "#0091ff",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translate(50%)"},
          "100%": { transform: "translate(0)"}
        },
        slideOutRight: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(50%)"}
        },
        slideInLeft: {
          "0%": { transform: "translate(-100%)"},
          "100%": { transform: "translate(0)"}
        },
        slideOutLeft: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-50%)"}
        }
      }
    },
  },
  plugins: [],
};
export default config;
