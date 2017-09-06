const webpack = require('webpack')
const path = require('path');
const ExtractTextWebpackPlugin = require ('extract-text-webpack-plugin')

const cssOutputPath = '../css/styles.css'
const extractSASS = new ExtractTextWebpackPlugin(cssOutputPath)

const config = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            { 
              loader: "css-loader" 
            }, 
            { 
              loader: "sass-loader", options: { 
                sourceMap: true 
              } 
            }, 
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSASS,
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    })
  ]
};

module.exports = config;