const Book = require("../models/books")
const HttpCodeError = require("../exceptions/http-exception")

const bookRegisterSchema =  require("./schemas/book-register-schema")

function bookRegisterPage(req, res, next) {
    res.render("bookRegister", {pageTitle: "Registrar livros"})
}

async function bookRegister(req, res, next) {
    const data = req.body
    let bookData
    try {
        bookData = await bookRegisterSchema.validate(data, { stripUnknown: true }).catch(err => {
            if(err.type == 'typeError'){
                throw new HttpCodeError(400, err.params.label, err)
            }
            throw new HttpCodeError(400, err.message, err)
        })

        await Book.create(bookData)
        .catch(err => {
            throw new HttpCodeError(500, "Internal error", err)
        })


        res.json({ message: "Registered book" })
    } catch (error) {
        next(error)
    }
}

module.exports = { post: bookRegister, get: bookRegisterPage}