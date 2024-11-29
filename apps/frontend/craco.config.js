const path = require('path');

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.js(x)?$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
      resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx'],
      },
    },
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
    },
  },
};
