let datas = [
    {
        "release_date": "1576",
        "author": "Mureil",
        "name": "Busan",
        "quantity": 1
    },
    {
        "release_date": "1041",
        "author": "Berta",
        "name": "Sacramento",
        "quantity": 3
    },
    {
        "release_date": "1839",
        "author": "Harmonia",
        "name": "Hong Kong",
        "quantity": 1
    },
    {
        "release_date": "1839",
        "author": "Catrina",
        "name": "Port Moresby",
        "quantity": 1
    },
    {
        "release_date": "1873",
        "author": "Marinna",
        "name": "Bergen"
    },
    {
        "release_date": "1539",
        "author": "Rebeca",
        "name": "Surat",
        "quantity": 2
    },
    {
        "release_date": "1873",
        "author": "Lorenza",
        "name": "Nagoya",
        "quantity": 1
    },
    {
        "release_date": "1253",
        "author": "Adriana",
        "name": "Cape Town",
        "quantity": 1
    },
    {
        "release_date": "1249",
        "author": "Annice",
        "name": "Guayaquil",
        "quantity": 1
    },
    {
        "release_date": "1896",
        "author": "Edith",
        "name": "Francistown",
        "quantity": 2
    },
    {
        "release_date": "1896",
        "author": "Dede",
        "name": "Muscat",
        "quantity": 2
    },
    {
        "release_date": "1896",
        "author": "Ursulina",
        "name": "Pune",
        "quantity": 1
    },
    {
        "release_date": "1896",
        "author": "Nananne",
        "name": "Podgorica",
        "quantity": 1
    },
    {
        "release_date": "1896",
        "author": "Lita",
        "name": "Valdivia"
    },
    {
        "release_date": "1896",
        "author": "Demetris",
        "name": "Nukulaelae",
        "quantity": 1
    },
    {
        "release_date": "1479",
        "author": "Almeta",
        "name": "Vientiane",
        "quantity": 2
    },
    {
        "release_date": "1485",
        "author": "Almeta",
        "name": "Port of Spain"
    },
    {
        "release_date": "1479",
        "author": "Almeta",
        "name": "Tegucigalpa"
    },
    {
        "release_date": "1545",
        "author": "Gilligan",
        "name": "Kuala Lumpur"
    },
    {
        "release_date": "1997",
        "author": "Heddie",
        "name": "Apia"
    },
    {
        "release_date": "1986",
        "author": "Heddie",
        "name": "Stepanakert"
    },
    {
        "release_date": "1446",
        "author": "Nerta",
        "name": "Kolkata"
    },
    {
        "release_date": "1700",
        "author": "Annecorinne",
        "name": "Kolkata Cartagena"
    },
    {
        "release_date": "1910",
        "author": "Vanessa",
        "name": "Zhengzhou"
    },
    {
        "release_date": "1782",
        "author": "Elise",
        "name": "Port Elizabeth"
    }
]

require("dotenv").config()
require("./src/database")
const Book = require("./src/models/books")

datas.map(async data => {
    await Book.create(data)
    .catch(err => {
        console.log(err)
    })

})
