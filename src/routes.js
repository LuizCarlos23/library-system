const express = require("express")

const router = express.Router()

const errorHandler = require("./middlewares/error-handler")
const bookRegister = require("./controllers/book-register")

router.post("/books/register", bookRegister.post)
router.get("/books/register", bookRegister.get)

router.use(errorHandler)

module.exports = router