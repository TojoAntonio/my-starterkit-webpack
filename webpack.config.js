const path = require('path');
const root = path.resolve(__dirname);
/*const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSCSS = new ExtractTextPlugin('../styles/style.css');*/
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/scss/main.scss', './src/js/main.js']
    //app: './src/js/main.js'
  },
  output: {
    path: root + '/dist/js',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: './',
    hot: true,
    inline: true
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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
    /*new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),*/
    new webpack.HotModuleReplacementPlugin()
    /*extractSCSS,
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })*/
  ]
}