class ProbesController {
    constructor(logger) {
        this.logger = logger
    }

    async handleGetLivenessMethod(req, res) {
        res.status(200)
        res.send()
    }

    async handleGetReadinessMethod(req, res) {
        res.status(200)
        res.send()
    }
}

module.exports = (logger) => {

    var controller = new ProbesController(logger)
    var express = require('express')
    var router = express.Router()

    router.get('/liveness', function (req, res) {
        controller.handleGetLivenessMethod(req, res)
    })

    router.get('/readiness', function (req, res) {
        controller.handleGetReadinessMethod(req, res)
    })

    return router
}