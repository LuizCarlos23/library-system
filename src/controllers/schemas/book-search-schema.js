const Yup = require("yup")

module.exports = Yup.object().shape({
    name: Yup.string().lowercase().transform(currentValue => "%"+currentValue+"%"),
    author: Yup.string().lowercase().transform(currentValue => "%"+currentValue+"%"),
    release_date: Yup.date().label("Invalid date").max(new Date(), "Future dates are not accpeted")
})