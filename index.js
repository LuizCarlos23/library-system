require("dotenv").config()

const path = require("path")

const express = require("express")
const mustacheExpress = require("mustache-express")

const server = require("./src")

const PORT = process.env.PORT || 3000

//Enginer config
server.set("views", path.resolve("views"))
server.set("view engine", "mustache")
server.engine("mustache", mustacheExpress())

//Static files config
server.use("/static", express.static("public"))

server.listen(PORT ,() => {
    console.log("Server running on port " + PORT)
})