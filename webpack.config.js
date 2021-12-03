const path = require('path');
const src = './src/index.js';

module.exports = {
  mode: 'development',

  entry: src,

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devtool: 'source-map',
};
