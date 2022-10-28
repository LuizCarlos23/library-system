require("./database")

const express = require("express")

const routes = require("./routes")

const server = express()

server.use(express.json())
server.use(routes)

server.get("/", (req, res) => {res.json({message: "ok"})})

module.exports = server