var express = require('express');
var router = express.Router();
const connection = require('../common/basic_connection.js').connection;

// console.log(connection, 'connection');
router.post('/', function (req, res, next) {
  console.log(req.body, 'changecheck');
  connection.raw("SELECT VERSION()").then(
    (version) => console.log((version[0][0]))
  )
  // connection.raw('UPDATE tasks SET `checked` = IF (`checked`, 0, 1) WHERE id = 2').then(
  //   (res) => console.log(res, 'raw')
  // )

  connection.raw(`UPDATE tasks SET checked = !checked WHERE id = ${req.body.id}`).then(
    () => {
      connection('tasks').where('id', req.body.id).then((rows) => {
        console.log(rows, 'rows');
        res.json({
          code:1,
          msg: '修改成功',
          value: rows[0].checked
        })
      })
    }
  )



  // connection('tasks')
  //   .where('id', req.body.id)
  //   .then((rows) => {
  //     console.log(rows, 'rows');
  //     connection('tasks').where('id', req.body.id).update({
  //       checked: !rows[0].checked
  //     }).then((rows) => {
  //       console.log(rows, 'rows');
  //       res.json({
  //         code:1,
  //         msg: '修改成功',
  //         value: rows[0].checked
  //       })
  //     })
  //   })
  // .update({
  //   checked: 
  // })
  // .then(() => {
  //   console.log('task_changecheck');
  //   res.json({
  //     code:1,
  //     msg: '删除成功'
  //   })
  // })
  // .catch((param) => {
  //   // res.json({
  //   //   code:1,
  //   //   msg: '删除成功'
  //   // })
  // })
});
router.routerName = 'task_changecheck'
module.exports = router;