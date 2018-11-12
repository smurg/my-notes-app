const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/client/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] } 
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    historyApiFallback: true
  }
};
// historyApiFallback will do the trick to render the app after refreshing the page