// Turns CSS px into rem so the whole layout scales with the root font size,
// which grows with the viewport above 1600px (see `html` in src/styles.css).
// 1px and smaller (hairline borders) stay px. Media queries are not touched.
const pxToRem = {
  postcssPlugin: 'px-to-rem',
  Declaration(decl) {
    if (!decl.value.includes('px') || decl.value.includes('url(')) return;
    decl.value = decl.value.replace(/(?<![\w.])(-?\d*\.?\d+)px\b/g, (m, n) =>
      Math.abs(parseFloat(n)) <= 1 ? m : `${parseFloat(n) / 16}rem`
    );
  },
};

module.exports = {
  plugins: [require('tailwindcss'), pxToRem, require('autoprefixer')],
};
