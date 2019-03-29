const pgp = require('pg-promise')
const options = {
    host:'localhost',
    database: 'coffee-app'
}

const db = pgp(options);
module.exports = db;