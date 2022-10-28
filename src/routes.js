const express = require("express")

const router = express.Router()

const bookRegister = require("./controllers/book-register")

router.post("/books/register", bookRegister)

module.exports = router