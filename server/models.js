var db = require('./db');

module.exports = {

  users: {
    get: function(params, callback) {
      var queryStr = 'SELECT id, hash, salt FROM users WHERE email = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO users(username, hash, salt, address, email, createdAt) VALUE (?, ?, ?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  coordinates: {
     get: function(params, callback) {
      var queryStr = 'SELECT time, lat, lng FROM coordinates WHERE id_users = ? AND time >= ? and time < ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO coordinates(id_users, time, lat, lng) VALUE (?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  locations: {
     get: function(params, callback) {
      var queryStr = 'SELECT * FROM locations WHERE id_users = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO locations(id_users, name, category, lat, lng) VALUE (?, ?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }

};