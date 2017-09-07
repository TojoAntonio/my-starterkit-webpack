const path = require('path');
const root = path.resolve(__dirname, '../');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/scss/main.scss', './src/js/main.js']
    //app: './src/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    filename: 'bundle.js',
    publicPath: '/dist/js/'
  },
  devtool: "inline-source-map",
  // devServer: {
  //   contentBase: './',
  //   hot: true,
  //   inline: true,
  //   port: 9005
  // },
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
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name]-[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  }
}