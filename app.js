var createError = require('http-errors');
var express = require('express');
var reload = require('reload')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var task_list_router = require('./routes/task_list');
var task_del_router = require('./routes/task_del');
var task_changecheck_router = require('./routes/task_changecheck');
var task_edit_router = require('./routes/task_edit');
var task_add_router = require('./routes/task_add').router;
var task_add_name = require('./routes/task_add').name;
console.log(task_del_router.routerName, 'task_del_router');
// console.log(task_add_name, 'task_add_name');
// console.log(usersRouter, 'usersRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/task_add', task_add_router);
app.use('/task_list', task_list_router);
app.use('/task_del', task_del_router);
app.use('/task_changecheck', task_changecheck_router);
app.use('/task_edit', task_edit_router);

reload(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('app.js ');

module.exports = app;
