let makeRedisClient = (config) => {
    
    const redis = require("async-redis")
    const options = {
        host: config.redis.host,
        port: config.redis.port,
        password: config.redis.password
    }

    return redis.createClient(options)
}

module.exports = (config) => {

    const client = makeRedisClient(config)
    const repo = require('./SubscriptionsRepository')(client)

    return {paymentsRepository: repo}
}
