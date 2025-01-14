const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";
  return {
    entry: "./src/main.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|svg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [ "style-loader", "css-loader", "sass-loader"]
        }
      ],
    },
  };
};
