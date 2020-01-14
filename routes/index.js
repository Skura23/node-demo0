var express = require('express');
var router = express.Router();
const connection = require('../common/basic_connection.js').connection;

// console.log(connection, 'connection');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('router /');
  res.render('index', { title: 'Express hi there' });
  

});

module.exports = router;
