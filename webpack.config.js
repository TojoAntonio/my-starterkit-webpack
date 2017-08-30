const path = require('path');
const root = path.resolve(__dirname);
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSCSS = new ExtractTextPlugin('../styles/style.css');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/scss/main.scss', './src/js/main.js']
  },
  output: {
    path: root + '/dist/js',
    filename: 'bundle.js'
  },
  devtool: "source-map",
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
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader", options: {
                sourceMap: true
              }
            },
          ]
        })
      }
    ]
  },
  plugins: [
    extractSCSS,
    //if you want to pass in options, you can do so:
    //extractSCSS({
    //  filename: 'style.css'
    //})
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    })
  ]
}