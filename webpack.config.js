const path = require('path');
const root = path.resolve(__dirname);

module.exports = {
  entry: {
    app: ['./src/js/main.js']
  },
  output: {
    path: root + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
        include: root
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}