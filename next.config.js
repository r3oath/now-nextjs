const path = require('path');

module.exports = {
  target: 'serverless',
  env: {
    REDIS_TOKEN: process.env.REDIS_TOKEN,
  },
  webpack: (config, options) => {
    const updatedConfig = config;
    const { alias } = config.resolve;

    updatedConfig.resolve.alias = Object.assign({}, alias, {
      '@app': __dirname
    });

    return updatedConfig;
  }
}
