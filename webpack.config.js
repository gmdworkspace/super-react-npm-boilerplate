const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  }
};