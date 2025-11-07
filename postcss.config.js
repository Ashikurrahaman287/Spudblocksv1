// Use CommonJS export to ensure PostCSS loaders (some running under CJS) load
// the plugin list correctly during build on different environments (Vercel).
// This avoids issues where the config is read as an ESM module and tooling
// doesn't receive the plugins object as expected.
module.exports = () => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
});

