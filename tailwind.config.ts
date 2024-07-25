import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'btn': '#00A811',
        'yellowAd': '#F1CC07',
        'adText': '#7E6B05',
        'pageActive': '#F2F5FE',
        
      },
      fontFamily: {
        sans: ["var(--font-inter-sans)", ...fontFamily.sans],
      },
      keyframes: {
        move: {
          '0%': { transform: 'translatex(100)' },
          '100%': { transform: 'translatex(0)' },
        },
        flash: {
          '0%': { opacity: '30'},
          '100%': { opacity: '100'},
        },
      },
      animation: {
        'appear': 'move 0.2s linear forwards',
        'slow-flash': 'flash 0.4s linear forwards',
      },
      fontSize: {
        sm: ['14px', '24px'],
        lg: ['18px', '24px']
      },
    }
  },
  plugins: [],
} satisfies Config;

