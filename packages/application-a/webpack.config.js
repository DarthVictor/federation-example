const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
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
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      name: "application_a",
      library: { type: "var", name: "application_a" },
      filename: "remoteEntry.js",
      exposes: {
        "./SayHelloFromA": "./src/app",
      },
      remotes: {
        application_b: "application_b",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
