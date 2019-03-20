const webpack = require('webpack');
const { reduce } = require('ramda');

const EXPOSED_ENVS = [
  'REDIS_TOKEN',
];

module.exports = {
  target: 'serverless',
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.DefinePlugin(reduce((obj, env) => ({
        ...obj,
        [`process.env.${env}`]: JSON.stringify(process.env[env]),
      }), {}, EXPOSED_ENVS)),
    );

    return config;
  },
}
