var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: 'routend',
  database: 'routend'
});

connection.connect();

module.exports = connection;

