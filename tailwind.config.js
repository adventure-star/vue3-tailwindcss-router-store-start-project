module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    layers: ['utilities'],
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
