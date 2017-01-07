var express = require('express');
var db = require('./db');
var controller = require('./controllers');

var parser = require('body-parser');
var morgan = require('morgan');

var router = require('./routes.js');

var app = express();

app.set('port', 3000);

app.use(parser.json());
app.use(morgan('dev'));

app.use('/', router);

//set up for when there are static files
//app.use(express.static(__dirname, '..', /client));

app.listen(app.get('port'));
console.log('Running on port ' + app.get('port'));


//Uncomment to fill database with dummy data on server start
//controller.mockData(37.773972, -122.431297, 1483812798)

module.exports.app = app;