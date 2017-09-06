const commonConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge");


const config = (options) => {
  const { env , test } = options;
  if(!env) {
    throw new Error("You must pass an env flag into build for webpack to work!");
  }
  
  console.log('\n'+`ENV=${env}`);

  const envConfig = require(`./webpack.${env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig);

  return mergedConfig;

};

module.exports = config;