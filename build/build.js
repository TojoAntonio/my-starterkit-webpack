require('shelljs/global')
const webpack = require('webpack')
const ora = require('ora')
const config = require('./webpack.config')
const loader = ora('loading...')

loader.start();
rm('-rf', 'dist');

const configOpt = {env: process.env.NODE_ENV, test: "test"}

webpack(config(configOpt), function(err,stats) {
  loader.stop();
  if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
})