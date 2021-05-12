const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./src/index",
  output: {
    publicPath: "http://localhost:3001/",
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
        use: [
          { loader: "babel-loader" },
          {
            loader: "@linaria/webpack-loader",
            options: {
              sourceMap: mode !== "production",
              classNameSlug: (hash) => `${hash}1`,
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
      filename: "styles-a.css",
      ignoreOrder: true,
    }),

    new ModuleFederationPlugin({
      name: "application_a",
      library: { type: "var", name: "application_a" },
      filename: "remoteEntry.js",
      exposes: {
        "./routes": "./src/app/routes",
      },
      remotes: {
        application_b: "application_b",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
