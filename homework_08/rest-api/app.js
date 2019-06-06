var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { MongoClient } = require('mongodb');

var indexRouter = require('./routes/index');

var app = express();

let connectionUrl = 'mongodb://127.0.0.1:27017';
let options = {
  useNewUrlParser: true
}
const client = new MongoClient(connectionUrl, options);

let DB;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  if (DB) {
    req.db = DB;
  } else {
    client.connect(function (err, result) {
      if (err)
        next(new Error("It was not possible to connect into mongodb database"));

      DB = result.db("homework08");
      DB.collection("cars").insertMany([{
        name: "name 1",
        category: "category 1",
        location: [-91.972706, 41.01802]
      },
      {
        name: "name 2",
        category: "category 2",
        location: [-91.961317, 41.019678]
      },
      {
        name: "name 3",
        category: "category 3",
        location: [-91.962535, 41.017210]
      },
      {
        name: "name 4",
        category: "category 4",
        location: [-91.964209, 41.016851]
      },
      {
        name: "name 5",
        category: "category 5",
        location: [-91.966175, 41.016301]
      },
      {
        name: "name 6",
        category: "category 6",
        location: [-91.968164, 41.016145]
      },
      {
        name: "name 7",
        category: "category 7",
        location: [-91.968109, 41.022320]
      },
      {
        name: "name 8",
        category: "category 8",
        location: [-91.967043, 41.014834]
      }
      ]);

      DB.collection("cars").createIndex({location:"2d"});

      req.db = DB;

      next();
    });
  }
});

app.use('/', indexRouter);

// catch 404 and forward to error hander
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
