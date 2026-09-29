/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./index.tsx", "./**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text)-(indigo|emerald|amber|rose|sky|violet)-(100|700)/,
    },
    {
      pattern: /(font-(semibold|medium|bold))|tracking-(tight|\\[0\\.2em\\])|text-\\[\\d{2,3}px\\]|lowercase|uppercase/,
    },
  ],
}

