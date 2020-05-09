const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  output: {
    filename: "",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
});
