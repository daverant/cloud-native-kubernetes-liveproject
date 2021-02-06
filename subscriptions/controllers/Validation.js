let validateString = (s) => {

    if(typeof(s) != "string") {
        return `${s} is not a string`
    }

    if(!s) {
        return `${s} is null or undefined`
    }

    if(s.length == 0 || !s.trim()) {
        return `${s} is empty or blank`
    }

    return null
}

let validateStrings = (...ss) => {
    return ss.map(validateString).filter(x => x != null)
}

let validateName = (name) => {

    const err = validateString(name)

    if(err != null) {
        return [err]
    }

    return []
}

let validateSubscription = (productName, monthsPurchased) => {
    return [
        ...validateStrings(productName), 
        ...validateMonthsPurchased(monthsPurchased)
    ]
}

let validateMonthsPurchased = (monthsPurchased) => {
    if(!monthsPurchased) {
        return [`amount is null or undefined`]
    }

    if(typeof(monthsPurchased) != "number") {
        return [`${monthsPurchased} is not a number`]
    }

    if(monthsPurchased < 1 || monthsPurchased > 12) {
        return [`${monthsPurchased} must be a value between 1 and 12`]
    }

    return []
}

module.exports = {
    validateSubscription
}