var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    path: 'users'
  })
  // res.send('respond with a resource');
});

module.exports = router;
