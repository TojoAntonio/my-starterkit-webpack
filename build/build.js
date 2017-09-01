require('shelljs/global')
const webpack = require('webpack')
const ora = require('ora')
const conf = require('./webpack.prod.js')
const loader = ora('loading...')

loader.start();
rm('-rf', 'dist');

webpack(conf, function(err,stats) {
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