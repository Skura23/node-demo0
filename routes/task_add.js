var express = require('express');
var router = express.Router();
const connection = require('../common/basic_connection.js').connection;

// console.log(connection, 'connection');
/* GET home page. */
router.post('/', function (req, res, next) {
  // console.log('router /task_add');



  res.json({
    test: 'test'
  })
  // res.render('index', { title: 'Express hi there' });

  connection.schema.createTable('tasks', (table) => {
      table.increments('id')
      table.string('title')
      table.string('urgency')
      table.string('content')
    }).then(() => console.log("table created"))
    .catch((err) => {
      console.log(err);
      throw err
    })
    .finally(() => {
      connection.destroy();
    });
});

let name = 'task_add'

module.exports = {
  router,
  name
};