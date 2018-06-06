const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    }
  }
};