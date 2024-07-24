import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'btn': '#00A811',
      },
      fontFamily: {
        sans: ["var(--font-inter-sans)", ...fontFamily.sans],
      },
      keyframes: {
        move: {
          '0%': { transform: 'translatex(100)' },
          '100%': { transform: 'translatex(0)' },
        },
      },
      animation: {
        'appear': 'move 0.2s linear forwards',
      },
    }
  },
  plugins: [],
} satisfies Config;

