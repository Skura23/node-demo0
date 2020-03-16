var express = require('express');
var router = express.Router();
const connection = require('../common/basic_connection.js').connection;

// console.log(connection, 'connection');
router.post('/', function (req, res, next) {
  console.log('del');
  console.log(req.body,'del');
  connection('tasks')
    .where('id', req.body.id)
    .del()
    .then(() => {
      console.log('task_del');
      res.json({
        code:1,
        msg: '删除成功'
      })
    })
    .catch((param) => {
      // res.json({
      //   code:1,
      //   msg: '删除成功'
      // })
    })
});
router.routerName = 'task_del'
module.exports = router;