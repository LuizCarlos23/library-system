const HttpCodeError = require("../exceptions/http-exception")

module.exports = (err, req, res, next) => {
    if(process.env.NODE_ENV == "development"){
        console.log(err)
    }

    if(err instanceof HttpCodeError){
        return res.status(err.statusCode).json({message: err.message})
    }

    return res.status(500).json({message: "Internal error"})
}