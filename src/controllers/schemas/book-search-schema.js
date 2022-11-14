const Yup = require("yup")

module.exports = Yup.object().shape({
    name: Yup.string().lowercase().transform(currentValue => "%"+currentValue+"%"),
    author: Yup.string().lowercase().transform(currentValue => "%"+currentValue+"%"),
    release_date: Yup.number().positive().integer().max(new Date().getFullYear(), "Future dates are not accpeted")
})