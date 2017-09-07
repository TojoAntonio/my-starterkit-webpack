const webpack = require('webpack')
const commonConfig = require('./webpack.common.js')
const config = require('./webpack.config.js')
const webpackDevServer = require('webpack-dev-server')
const port = 9005;

const configOpt = {env: process.env.NODE_ENV, test: "test", port}

const compiler = webpack(config(configOpt));
const server = new webpackDevServer(compiler, {
  hot: true,
  contentBase: './',
  quiet: false,
  noInfo: false,
  publicPath: commonConfig.output.publicPath,
  stats: { colors: true }
});

server.listen(port, (error) => {
  if(error) {
    console.log(error);
  } else {
    console.log("I'm listen on port:" + port);
  }
});