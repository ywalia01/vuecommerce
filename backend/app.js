var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
require("dotenv").config();

var mainRouter = require("./routes/main");
var userRouter = require("./routes/user");
var adminRouter = require("./routes/admin");
var sellerRouter = require("./routes/seller");

var app = express();

// Set base dir
global.__basedir = __dirname;

var corsOptions = {
  origin: 'http://localhost:8000', // Matches the frontend
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/main", mainRouter);
app.use("/user", userRouter);
app.use("/seller", sellerRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

module.exports = app;
