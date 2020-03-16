var express = require('express');
var router = express.Router();
const connection = require('../common/basic_connection.js').connection;

// console.log(connection, 'connection');
/* GET home page. */
router.post('/', function (req, res, next) {
  // console.log('router /task_add');
  // res.json({
  //   test: 'test'
  // })
  checkReqData(checkTableExist, addTask)

  function checkReqData(cb, cb2) {
    if (!req.body.title.trim()) {
      return res.json({
        code: -1,
        msg: '请输入标题'
      })
    }
    if (!req.body.urgency.trim()) {
      return res.json({
        code: -1,
        msg: '请选择紧急程度'
      })
    }
    if (!req.body.content.trim()) {
      return res.json({
        code: -1,
        msg: '请输入内容'
      })
    }
    console.log('checkReqData')
    cb(cb2)
  }

  function checkTableExist(cb) {
    connection.schema.hasTable('tasks').then(function (exists) {
      if (!exists) {
        return connection.schema.createTable('tasks', function (table) {
          table.increments('id')
          table.string('title')
          table.string('urgency')
          table.string('content')
          table.timestamps(true, true);
          table.boolean('checked')
          cb()
        });
      } else {
        cb()
      }
    });
  }

  function addTask() {
    console.log(req.body, 'req.body')
    connection('tasks').insert(req.body).then(() => {
        console.log("data inserted")
        res.json({
          code: 1,
          msg: '添加成功'
        })
      })
      .catch((err) => {
        console.log(err);
        throw err
      })
      .finally(() => {
        // knex.destroy();
      });
  }
});

let name = 'task_add'

module.exports = {
  router,
  name
};