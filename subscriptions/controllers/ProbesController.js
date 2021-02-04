class ProbesController {
    constructor(logger) {
        this.logger = logger
    }

    async handleGetLiveness(req, res) {
        res.status(200)
        res.send()
    }

    async handleGetReadiness(req, res) {
        res.status(200)
        res.send()
    }
}

module.exports = (logger) => {

    var controller = new ProbesController(logger)
    var express = require('express')
    var router = express.Router()

    router.get('/liveness', function (req, res) {
        controller.handleGetLiveness(req, res)
    })

    router.get('/readiness', function (req, res) {
        controller.handleGetReadiness(req, res)
    })

    return router
}