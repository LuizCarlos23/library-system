const Yup = require("yup")

module.exports = Yup.object().shape({
    name: Yup.string().lowercase().required("Book name is required"),
    author: Yup.string().lowercase().required("Author name is required"),
    release_date: Yup.date().label("Invalid date").max(new Date(), "Future dates are not accpeted").required("Book release date required")
})