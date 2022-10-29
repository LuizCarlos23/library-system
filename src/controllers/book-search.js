const { Op } = require("sequelize")

const Book = require("../models/books")
const HttpCodeError = require("../exceptions/http-exception")

const bookSearchSchema = require("./schemas/book-search-schema")

function bookSearchPage(req, res, next) {
    res.render("bookSearch", {pageTitle: "Registrar livros"})
}

async function bookSearch(req, res, next) {
    let data = req.body
    let bookData, databaseData

    try {
        bookData = await bookSearchSchema.validate(data, { stripUnknown: true })
            .catch(err => {
                if(err.type == 'typeError'){
                    throw new HttpCodeError(400, err.params.label, err)
                }
                throw new HttpCodeError(400, err.message, err)
            })
        console.log(bookData)

        databaseData = await Book.findAll({
            where: 
                new Object(...Object.keys(bookData)
                    .map(key => { 
                        return new Object({[key]: {[Op.like]: `%${bookData[key]}%`}})
                }))
            , 
            raw: true
        }).catch(error => {
            throw new HttpCodeError(500, "Internal error", error)
        })

        res.status(200).json({message: "okay", data: databaseData})
    } catch (error) {
        next(error)
    }
}

module.exports = { post: bookSearch, get: bookSearchPage }