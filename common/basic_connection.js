const connection = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'node-task',
    port: 3308,
  }
});

module.exports = {
  connection
}