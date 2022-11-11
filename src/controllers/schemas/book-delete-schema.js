const Yup = require("yup")

module.exports = Yup.object().shape({
    book_id: Yup.number().integer().label("Invalid id").required("Book id is required"),
})