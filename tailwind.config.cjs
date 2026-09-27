/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        paper: '#0a0a0a',
        fg: '#e8e8e8',
        muted: '#a1a1a1',
        dim: '#6b6b6b',
        line: '#222222',
      },
      fontFamily: {
        mono: ['Monocraft', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        micro: ['12px', '1.5'],
      },
    },
  },
  plugins: [],
};
