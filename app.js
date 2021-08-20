const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());    //Allow not to encounter errors

app.use('/', indexRouter);

module.exports = app;
