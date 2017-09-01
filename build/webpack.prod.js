const config = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require ('extract-text-plugin')

const cssOutput = path.resolve(__dirname, '../dist/css')
const extractSASS = new ExtractTextPlugin(cssOutput)


module.exports = config