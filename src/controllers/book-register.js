const Book = require("../models/books")
const HttpCodeError = require("../exceptions/http-exception")

const bookRegisterSchema =  require("./schemas/book-register-schema")


async function bookRegister(req, res, next) {
    const bookData = req.body

    try {
        await bookRegisterSchema.validate(bookData).catch(err => {
            if(err.type == 'typeError'){
                throw new HttpCodeError(400, err.params.label, err)
            }
            throw new HttpCodeError(400, err.message, err)
        })

        await Book.create({
            name: bookData.name,
            author: bookData.author,
            release_date: bookData.release_date,
        })
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            throw new HttpCodeError(500, "Internal error", err)
        })


        res.json({ message: "okay" })
    } catch (error) {
        next(error)
    }
}

module.exports = bookRegister