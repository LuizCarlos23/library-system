const Yup = require("yup")
const { Op } = require("sequelize")

const Book = require("../models/books")
const HttpCodeError = require("../exceptions/http-exception")

const bookSearchSchema = require("./schemas/book-search-schema")

function bookSearchPage(req, res, next) {
    res.render("bookSearch", {pageTitle: "Buscar livros"})
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
            
        let dataToFind = new Object( Object.keys(bookData).map(key => {
            if (!Number(bookData[key]), !(Yup.date().isValidSync(bookData[key]))) {
                return new Object( { [key]: {[Op.like]: bookData[key]} } )
            } 
            return new Object( { [key]: bookData[key] } )
        }))

        databaseData = await Book.findAll({
            where: dataToFind, 
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