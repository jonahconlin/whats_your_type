import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'sf-pro-display': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        'alegreya': ['var(--font-alegreya)', 'serif'],
        'eb-garamond': ['var(--font-eb-garamond)', 'serif'],
        'libre-baskerville': ['var(--font-libre-baskerville)', 'serif'],
        'playfair-display': ['var(--font-playfair-display)', 'serif'],
        'arvo': ['var(--font-arvo)', 'serif'],
        'source-sans': ['var(--font-source-sans)', 'sans-serif'],
        'ibm-plex-sans': ['var(--font-ibm-plex-sans)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        'lobster': ['var(--font-lobster)', 'cursive'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        'nav-bg': 'rgba(144, 147, 161, 0.1)',
        'dark-blue': '#03060f',
      },
    },
  },
  plugins: [],
};
export default config;
