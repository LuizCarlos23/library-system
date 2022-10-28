const Yup = require("yup")

module.exports = Yup.object().shape({
    name: Yup.string().required(),
    author: Yup.string().required(),
    release_date: Yup.date().required()
})