const {Poll, Client} = require('pg')

const connectionStr = 'postgressql://postgres:123@localhost:5432/store';

const client = new Client({
    connectionString: connectionStr
})


module.exports = client;