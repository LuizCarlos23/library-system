const Yup = require("yup")
const { Op } = require("sequelize")

const Book = require("../models/books")
const HttpCodeError = require("../exceptions/http-exception")

const bookDeleteSchema = require("./schemas/book-delete-schema")

async function bookDelete(req, res, next) {
    let data = req.body
    let bookData, databaseData

    try {
        bookData = await bookDeleteSchema.validate(data, { stripUnknown: true }).catch(err => {
            if(err.type == 'typeError'){
                throw new HttpCodeError(400, err.params.label, err)
            }
            throw new HttpCodeError(400, err.message, err)
        })

        databaseData = await Book.destroy({
            where: {
                id: bookData.book_id 
            }, 
            raw: true
        }).catch(error => {
            throw new HttpCodeError(500, "Internal error", error)
        })

        res.status(200).json({message: "deleted"})
    } catch (error) {
        next(error)
    }
}

module.exports = { post: bookDelete }