const Yup = require("yup")
const Moment = require("moment")

module.exports = Yup.object().shape({
    name: Yup.string().required(),
    author: Yup.string().required(),
    release_date: Yup.date().max(new Date()).required()
})