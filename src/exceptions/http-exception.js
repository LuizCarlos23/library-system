class HttpCodeError extends Error {
    constructor(statusCode, message, error = null){
        super(message)
        this.name = "HttpCodeError"
        this.statusCode = statusCode
        this.message = message
        this.error = error
    }
}

module.exports = HttpCodeError