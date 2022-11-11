const express = require("express")

const router = express.Router()

const errorHandler = require("./middlewares/error-handler")
const bookRegister = require("./controllers/book-register")
const bookSearch = require("./controllers/book-search")
const bookDelete = require("./controllers/book-delete")

router.post("/books/register", bookRegister.post)
router.get("/books/register", bookRegister.get)

router.post("/books/search", bookSearch.post)
router.get("/books/search", bookSearch.get)

router.post("/books/delete", bookDelete.post)

router.get("", (req, res) => res.send("Error 404"))

router.use(errorHandler)

module.exports = router