var express = require('express');
var router = express.Router();
const connection = require('../common/basic_connection.js').connection;

// console.log(connection, 'connection');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('router /');
  res.render('index', { title: 'node demo0' });
  
  connection.schema.hasTable('tasks').then(function (exists) {
    if (!exists) {
      return connection.schema.createTable('tasks', function (table) {
        table.increments('id')
        table.string('title')
        table.string('urgency')
        table.string('content')
        table.timestamps(true, true);
        table.boolean('checked')
      });
    }
  });

});

module.exports = router;
