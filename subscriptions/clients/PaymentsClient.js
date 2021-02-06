const axios = require('axios').default
const validation = require('./Validation')
const config = require("../config")()

class PaymentsClient {
    constructor(logger) {
        this.logger = logger
        this.httpClient = axios.create({
            baseURL: config.paymentUrlBase
        });
        this.httpClient.interceptors.request.use(
            (config) => {logger.debug(config)},
            (error) => {
                logger.error(error)
                return Promise.reject(error)
            }
        )
        this.httpClient.interceptors.response.use(
            (response) => {logger.debug(response)},
            (error) => {
                logger.error(error)
                return Promise.reject(error)
            }
        )
    }

    async processAsync(type, amount) {
        const method = "/payment-methods/process"
        const request = {
            "type": type,
            "amount": amount
        }
        validation.validateProcessRequest(request)
        await this.httpClient.post(method, request)
    }

    async processRefundAsync(amount) {
        await this.processAsync("refund", amount)
    }

    async processPaymentAsync(amount) {
        await this.processAsync("payment", amount)
    }
}

module.exports = (logger) => new PaymentsClient(logger)