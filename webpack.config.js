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
    filename: 'bundle.js',
    publicPath: '/dist/'
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
  },
  plugins: [
    extractSCSS,
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}