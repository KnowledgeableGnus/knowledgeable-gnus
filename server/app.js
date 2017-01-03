var express = require('express');
var db = require('./db');

var parser = require('body-parser');
var morgan = require('morgan');

var router = require('./routes.js');

var app = express();

app.set('port', 3000);

app.use(parser.json());
app.use(morgan('dev'));

//where does this go???
//app.use('/???', router);

//set up for when there are static files
//app.use(express.static(__dirname, '..', /client));

module.exports.app = app;