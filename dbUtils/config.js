const knex = require('knex');
let db = null;

process.env.ENVIROMENT==='development' ?
db = knex({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
    }
  })
:
db = knex({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    ssl: {
      rejectUnauthorized: false
    }
    
  }
});

module.exports = {db: db}