module.exports = (app, repositories, logger) => {
    const loadPaymentsController = require('./PaymentsController')
    app.use("/payments", loadPaymentsController(repositories, logger))
    
    const loadProbesController = require("./ProbesController")
    app.use("/probes", loadProbesController(logger))
}

