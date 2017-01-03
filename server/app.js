var express = require('express');
var db = require('./db');

var parser = require('body-parser');
var morgan = require('morgan');

var app = express();
app.set('port', 3000);

app.use(parser.json());
app.use(morgan('dev'));

module.exports.app = app;