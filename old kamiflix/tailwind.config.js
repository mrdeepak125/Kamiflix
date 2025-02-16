import { nextui } from "@nextui-org/react";
import vidstackReact from "@vidstack/react/tailwind.cjs";
import tailwindcssAnimate from "tailwindcss-animate";

function customVariants({ addVariant, matchVariant }) {
  matchVariant('parent-data', (value) => `.parent[data-${value}] > &`);
  addVariant('hocus', ['&:hover', '&:focus-visible']);
  addVariant('group-hocus', ['.group:hover &', '.group:focus-visible &']);
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    vidstackReact({
      prefix: "media",
    }),
    tailwindcssAnimate,
    customVariants,
  ],
};

export default config;
