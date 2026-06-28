import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ink: "#111111",
        canvas: "#FAFAFA",
        brand: {
          green: "#18C37E",
          blue: "#3B82F6",
          purple: "#8B5CF6",
          amber: "#F59E0B",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem", // 28px — design system radius
        card: "28px",
      },
      boxShadow: {
        // Strong bottom shadow, like the screenshots
        drop: "0 18px 0 -2px rgba(17,17,17,0.04), 0 24px 50px -12px rgba(17,17,17,0.18)",
        "drop-sm": "0 8px 0 -2px rgba(17,17,17,0.04), 0 14px 30px -10px rgba(17,17,17,0.16)",
        "drop-lg": "0 26px 0 -4px rgba(17,17,17,0.05), 0 40px 70px -16px rgba(17,17,17,0.22)",
        "glow-green": "0 8px 0 0 #0f9d63, 0 22px 40px -14px rgba(24,195,126,0.45)",
        "glow-blue": "0 8px 0 0 #2563eb, 0 22px 40px -14px rgba(59,130,246,0.45)",
        "glow-purple": "0 8px 0 0 #7c3aed, 0 22px 40px -14px rgba(139,92,246,0.45)",
        "glow-ink": "0 8px 0 0 #2563eb, 0 22px 44px -12px rgba(37,99,235,0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
