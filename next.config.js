module.exports = {
  target: 'serverless',
  publicRuntimeConfig: {
    redisToken: process.env.REDIS_TOKEN,
  }
}
