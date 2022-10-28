module.exports = (async () => {
    const database = require('./connection');
 
    try {
        await database.sync();
        console.log("Database connection successful!");
    } catch (error) {
        console.log("Database connection fail!");
        console.log(error)
    }
})();