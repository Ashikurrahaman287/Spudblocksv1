// Provide an ESM-safe export as well so builds that load ESM configs don't
// error. The canonical CommonJS config lives in `postcss.config.cjs` and
// will be preferred by tooling that loads CJS; this file avoids runtime
// errors in ESM contexts.
export default () => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
});

