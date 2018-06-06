const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  entry: [path.join(__dirname, 'src', 'index.js')],
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') ,
    library: 'super-react-infinite-scroll',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ]
});
