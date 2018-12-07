var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getSqlRouter = require('./routes/getSql')
var getExcelRouter = require('./routes/getExcel')
var upExcelRouter = require('./routes/upExcel')
var thirdReqRouter = require('./routes/thirdReq') // 第三方请求

var getDiscListRouter = require('./routes/getDiscList')
var lyricRouter = require('./routes/lyric')

var app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/123', usersRouter);
app.use('/api/get',getSqlRouter);
app.use('/api/getExcel', getExcelRouter);
app.use('/api/upExcel', upExcelRouter);
app.use('/api/third', thirdReqRouter);
app.use('/api/getDiscList', getDiscListRouter);
app.use('/api/lyric', lyricRouter);



//catch 404 and forward to error handler
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

module.exports = app;
