const express = require("express")

const router = express.Router()

const errorHandler = require("./middlewares/error-handler")
const bookRegister = require("./controllers/book-register")
const bookSearch = require("./controllers/book-search")

router.post("/books/register", bookRegister.post)
router.get("/books/register", bookRegister.get)

router.post("/books/search", bookSearch.post)
router.get("/books/search", bookSearch.get)

router.use(errorHandler)

module.exports = router