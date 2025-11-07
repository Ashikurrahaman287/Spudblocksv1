// CommonJS PostCSS config. Using a .cjs extension ensures this file is loaded
// as CommonJS even when package.json sets "type": "module".
// Export a function to be maximally compatible with different loaders.
module.exports = () => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
});
