const path = require("path");
const CracoCSSModules = require('craco-css-modules');
module.exports = {
  // plugins: [{plugin: CracoCSSModules}],
  babel: {
    presets: ["@babel/preset-env", "@babel/preset-react"],
  },
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/react",
                {
                  plugins: ["@babel/plugin-proposal-class-properties"],
                },
              ],
            },
          },
          {
            test: /\.scss$/,
            exclude: [/node_modules/, /!node_modules\/bootstrap/],
            include: [path.resolve(__dirname, "./apps/frontendapp/src/**")],
            use: [
              require.resolve("style-loader"),
              require.resolve("css-loader"),
              {
                loader: require.resolve("sass-loader"),
                options: { sourceMap: true },
              },
            ],
          },
          {
            enforce: "pre",
            exclude: [
              /@babel(?:\/|\\{1,2})runtime/,
              /node_modules(\/|\\)testing-library-selector/,
            ],
            test: /\.(js|mjs|jsx|css|scss)$/,
            loader: require.resolve("source-map-loader"),
          },
        ],
      },
      resolve: {
        enforceExtension: false,
        extensions: [".js", ".jsx", ".scss"],
        alias: {
          "@utils": path.resolve(__dirname, "src/utils"),
          "@contexts": path.resolve(__dirname, "src/contexts"),
          "@proptypes": path.resolve(__dirname, "src/proptypes"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@components": path.resolve(__dirname, "src/components"),
          "@fonts": path.resolve(__dirname, "src/fonts"),
          "@styles": path.resolve(__dirname, "src/styles")
        },
        preferRelative: true,
      },
    },
  },
};
