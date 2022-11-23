const Yup = require("yup")

module.exports = Yup.object().shape({
    name: Yup.string().required("Book name is required"),
    author: Yup.string().required("Author name is required"),
    release_date: Yup.number().positive().integer().max(new Date().getFullYear(), "Future dates are not accpeted").required("Book release date required"),
    quantity: Yup.number().min(0).required()
})