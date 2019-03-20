module.exports = {
  target: 'serverless',
  env: {
    redisToken: process.env.REDIS_TOKEN,
  }
}
