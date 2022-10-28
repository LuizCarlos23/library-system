const Book = require("../models/books")
const bookRegisterSchema =  require("./schemas/book-register-schema")


async function bookRegister(req, res, next) {
    console.log(req.body)
    await bookRegisterSchema.validate(req.body).catch(err => console.log(err))
    res.json({ message: "okay" })
}

module.exports = bookRegister