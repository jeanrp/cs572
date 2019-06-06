var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { MongoClient } = require("mongodb");

var indexRouter = require('./routes/index');
var app = express();
let connectionUrl = "mongodb://127.0.0.1:27017";
var options = {
  useNewUrlParser: true
};

const client = new MongoClient(connectionUrl, options);
let db;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (db) {
    req.db = db;
    next();
  } else {
    client.connect((error, result) => {
      if (error)
        return next(new Error("It was not possible to connect"));

      req.db = db = result.db("homework08");
      next();
    })
  }
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
