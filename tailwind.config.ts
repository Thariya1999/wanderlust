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
        sand: "#F5EFE6",
        cream: "#FAF7F2",
        ink: "#1A1510",
        bark: "#3D2B1F",
        copper: "#C4793A",
        mist: "#8A9BA8",
        gold: "#D4A853",
        sage: "#6B7C6E",
        terracotta: "#C1603A",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "hero-zoom": "heroZoom 12s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "fade-up-delay-1": "fadeUp 0.8s 0.15s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "fade-up-delay-2": "fadeUp 0.8s 0.3s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "fade-up-delay-3": "fadeUp 0.8s 0.45s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "scroll-line": "scrollLine 1.5s ease-in-out infinite",
        "count-up": "fadeUp 0.6s ease both",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(0.25,0.46,0.45,0.94) both",
      },
      keyframes: {
        heroZoom: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
