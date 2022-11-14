const { DataTypes } = require("sequelize")
const connection = require("../database/connection")

const Book = connection.define("books", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        author: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        release_date: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
    }
)

module.exports = Book