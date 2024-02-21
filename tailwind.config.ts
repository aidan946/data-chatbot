import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [daisyui as any],
  daisyui: {
    themes: ["retro"],
    logs: false,
  },
} satisfies Config;
