require('dotenv').config();
const { createPool } = require('mysql');


const database = createPool({
    host:process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})


database.getConnection(error => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log("Database connection created successfully.")
});


module.exports = database;