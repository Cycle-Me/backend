// var createError = require('http-errors');
// const express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// module.exports = app;











import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
// import Users from "./models/UserModel.js"; //// = JALANKAN CODE INI JIKA BELUM ADA TABLE PADA SQL
const app = express();

try{
    await db.authenticate();
    console.log("Database Connected...")
    // await Users.sync(); //// = JALANKAN CODE INI JIKA BELUM ADA TABLE PADA SQL
} catch (error) {
    console.error(error)
}
app.use(express.json());
app.use(router);
app.listen(5000, ()=> console.log('Server Running at port 5000'))






















//  DIHAPUS AJA GAPAPA

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
