var express = require('express');
var db = require('./db');

var parser = require('body-parser');
var morgan = require('morgan');

var router = require('./routes.js');

var app = express();

app.set('port', 3000);

app.use(parser.json());
app.use(morgan('dev'));

app.use('/', router);

app.get('/', function(req, res) {
  res.send('Welcome to Routend');
})

//set up for when there are static files
//app.use(express.static(__dirname, '..', /client));

app.listen(app.get('port'));
console.log('Running on port ' + app.get('port'));


module.exports.app = app;