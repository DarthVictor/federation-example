const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  target: "web",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    libraryTarget: "commonjs",
    globalObject: "this",
  },
  devtool: "source-map",
  optimization: {
    minimize: mode === "production",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "@linaria/webpack-loader",
            options: {
              sourceMap: mode !== "production",
              classNameSlug: (hash) => `${hash}c`,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: mode !== "production",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles-common.css",
      ignoreOrder: true,
    }),
  ],
};
