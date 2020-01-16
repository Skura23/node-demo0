var express = require('express');
var router = express.Router();
const connection = require('../common/basic_connection.js').connection;


/* GET task listing. */
router.get('/', function (req, res, next) {
  // res.json({
  //   path: 'users'
  // })

  connection.from('tasks').select("*")
    .then((rows) => {
      for (row of rows) {
        console.log(`${row['id']} ${row['title']} `);
      }
      res.json({
        code:1,
        data:rows
      })
    }).catch((err) => {
      console.log(err);
      throw err
    })
    .finally(() => {
      // connection.destroy();
    });
});

module.exports = router;