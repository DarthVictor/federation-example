const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./src/index",
  output: {
    publicPath: "http://localhost:3002/",
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
              classNameSlug: (hash) => `${hash}2`,
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
    new HtmlWebpackPlugin({ template: "./public/index.html" }),

    new MiniCssExtractPlugin({
      filename: "styles-b.css",
      ignoreOrder: true,
    }),

    new ModuleFederationPlugin({
      name: "application_b",
      library: { type: "var", name: "application_b" },
      filename: "remoteEntry.js",
      exposes: {
        "./SayHelloFromB": "./src/app",
      },
      remotes: {
        application_a: "application_a",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
