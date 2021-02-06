const {EOL} = require('os')

const validateProcessType = (type) => {

    const err = validateString(type)

    if(err != null) {
        return [err]
    }

    if(type !="refund" && type != "payment") {
        return [`Process type must either be 'refund' or 'payment'. Got ${type}`]
    }

    return []
}

const validateProcessAmount = (amount) => {

    if(!amount) {
        return [`amount is null or undefined`]
    }

    if(typeof(amount) != "number") {
        return [`${amount} is not a number`]
    }

    if(amount <= 0) {
        return [`${amount} must be a positive amount over 0`]
    }

    return []
}

const validatePaymentRequest = (request) => {
    const errors = [
        ...validateProcessAmount(request.amount),
        ...validateProcessType(request.type)
    ]
    if(errors.length > 0) {
        throw new Error(errors.join(EOL))
    }
}

module.exports = {
    validatePaymentRequest
}