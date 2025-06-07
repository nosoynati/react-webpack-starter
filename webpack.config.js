/* eslint-disable no-undef */

const path = require("path");
const package = require("./package.json")
const commonPaths = require("./build_utils/config/commonPaths")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";

  return {
    entry: commonPaths.entryPath,
    output: {
      filename: `${package.version}/js/[name].[chunkhash:8].js`,
      uniqueName: package.name,
      publicPath: "/",
      path: commonPaths.outputPath,
      chunkFilename: `${package.version}/js/[name].[chunkhash:8].js`,
      crossOriginLoading: "anonymous"
      
    },
    devServer: {
      port: 8000,
      static: {
        directory: commonPaths.outputPath,

      },
      historyApiFallback: {
        index: "/"
      },
      webSocketServer: false,
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "index.html")
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    optimization: {
      runtimeChunk: "single",
    },
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
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|svg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
