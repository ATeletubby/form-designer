import { defineConfig } from "windicss/helpers";

export default defineConfig({
  prefix: "wd-",
  preflight: false,
  attributify: {
    prefix: "w:",
  },

  theme: {
    extend: {
      colors: {
        gray: {
          900: "#191919",
          800: "#23334e",
          700: "#333333",
          500: "#586376",
          300: "#8A8A9A",
          50: "#F9FBFC",
        },
        blue: {
          900: "#00244D",
          800: "#013D79",
          700: "#005EB0",
          600: "#0679D1",
          500: "#099DFD",
          400: "#35B4FD",
          300: "#62CAFE",
          200: "#8EDDFE",
          100: "#BBEDFF",
          50: "#E8FAFF",
        },
        yellow: {
          900: "#DF8E03",
          600: "#FBC23F",
          500: "#FAAD15",
          400: "#FBC23F",
          300: "#FDE493",
          200: "#FEF1BD",
          100: "#fef3e6",
          50: "#FFFBE6",
        },
        green: {
          600: "#06C633",
          500: "#2BD14C",
          400: "#04A82F",
          300: "#82E88F",
          200: "#B3F4B9",
          100: "#E8FFEA",
        },
        white: "#ffffff",
      },
      fontFamily: {
        pingfangM: ["PingFangSC-Medium", "PingFang SC"],
      },
    },
    fontSize: {
      "xs": ["12px", "18px"],
      "sm": ["13px", "20px"],
      "base": ["14px", "22px"],
      "lg": ["16px", "24px"],
      "xl": ["18px", "26px"],
      "2xl": ["20px", "28px"],
      // TODO: 3xl - 8xl 自行发挥
    },
    borderColor: theme => ({
      ...theme("colors"),
      "gray-100": "#F2F3F6",
      "gray-300": "#E3E7EC",
    }),
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "4px",
      md: "8px",
      lg: "12px",
      large: "16px",
      full: "9999px",
    },
    screens: {
      "sm": "640px",
      // => @media (min-width: 640px) { ... }
      "md": "768px",
      // => @media (min-width: 768px) { ... }
      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }
      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
  },
});
