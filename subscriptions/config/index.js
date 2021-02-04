let determineConfigDir = () => {

    if(process.env.CONFIG_DIR === undefined || process.env.CONFIG_DIR == null) { 
        return '.'
    }

    return process.env.CONFIG_DIR
}

let determineEnv = () => {

    const defaultEnv = 'development'

    if(process.env.NODE_ENV === undefined || process.env.NODE_ENV == null) {  
        return defaultEnv
    } else if(process.env.NODE_ENV == 'development') {
        return 'development'
    } else if(process.env.NODE_ENV == 'production') {
        return 'production'
    } else {
        return defaultEnv
    }
}

let determineRedisPass = () => {
    
    const pass = process.env.REDIS_PASS

    if(process.env.REDIS_PASS === undefined || process.env.REDIS_PASS == null) {
        return ""
    }

    return pass
}

module.exports = function() {
        
    const config_dir = determineConfigDir()
    const env = determineEnv()
    const config_data = require(`${config_dir}/config.${env}.json`)
    config_data.redis_pass = determineRedisPass()

    return config_data
}