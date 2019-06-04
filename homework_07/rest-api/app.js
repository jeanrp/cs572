var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var lectureRouter = require('./routes/lectures'); 
DB = require('./data/connection');

var app = express(); 


app.use(logger('dev')); 
app.use(express.urlencoded({ extended: false }));  

app.use('/lectures', lectureRouter); 

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
  res.json({message: err.message, status: err.status});
});

module.exports = app;
