/* config-overrides.js */
module.exports = function override(config) {
  // do stuff with the webpack config...
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    chunks: 'async',
    minSize: 500000,
    maxSize: 800000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    automaticNameMaxLength: 30,
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  };
  return config;
};
