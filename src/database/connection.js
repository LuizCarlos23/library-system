const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: process.env.NODE_ENV == "development" ? true : false
    }
)

module.exports = sequelize