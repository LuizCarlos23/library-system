const Yup = require("yup")

module.exports = Yup.object().shape({
    name: Yup.string(),
    author: Yup.string(),
    release_date: Yup.date().label("Invalid date").max(new Date(), "Future dates are not accpeted")
})