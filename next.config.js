module.exports = {
  target: 'serverless',
  env: {
    REDIS_TOKEN: process.env.REDIS_TOKEN,
  },
  webpack: (config, options) => {
    config.resolve = {
      alias: {
        '@app': path.join(__dirname, './'),
      }
    }

    return config;
  }
}
