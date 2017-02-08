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
      var queryStr = 'INSERT INTO locations(id_users, name, category, placeId, image, address, rating, lat, lng) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  categoryStats: {
    get: function(params, callback) {
      var queryStr = 'SELECT category, SUM(exit_time) - SUM(enter_time) AS time_spent FROM categoryStats WHERE id_users = ? GROUP BY category';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      var queryStr = "INSERT INTO categoryStats(id_users, name, category, enter_time, exit_time) VALUES (?, ?, (SELECT category FROM locations WHERE name = ? LIMIT 1), ?, ?)";
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    put: function(params, callback) {
      var queryStr = 'UPDATE categoryStats SET exit_time = ? WHERE (id_users = ? AND name = ? AND exit_time = 0)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      })
    }
  },

  profiles: {
    get: function(params, callback) {
      var queryStr = 'SELECT * FROM profiles WHERE id_users = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      var queryStr = 'INSERT INTO profiles(id_users, first_name, last_name, gender, city, state, image, status, push) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    put: function(params, callback) {
      var queryStr = 'UPDATE profiles SET first_name = ?, last_name = ?, gender = ?, city = ?, state = ?, image = ?, status = ?, push = ? WHERE id_users = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    putPush: function(params, callback) {
      var queryStr = 'UPDATE profiles SET push = ? WHERE id_users = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    putImage: function(params, callback) {
      var queryStr = 'UPDATE profiles SET image = ? WHERE id_users = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    putStatus: function(params, callback) {
      var queryStr = 'UPDATE profiles SET status = ? WHERE id_users = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  status: {
    get: function(params, callback) {
      var queryStr = 'SELECT status FROM status WHERE id_users = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      var queryStr = 'INSERT INTO status(id_users, status) VALUE (?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  images: {
    get: function(params, callback) {
      var queryStr = 'SELECT image FROM images WHERE id_users = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      var queryStr = 'INSERT INTO images(id_users, image) VALUE (?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      })
    }
  },

  interests: {
    get: function(params, callback) {
      var queryStr = 'SELECT id_users FROM interests WHERE interest = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      var queryStr = 'INSERT INTO interests(id_users, interest) VALUE (?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  matches: {
    get: function(params, callback) {
      var queryStr = 'SELECT * FROM profiles WHERE id_users IN (SELECT match_id FROM matches WHERE id_users = ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      var queryStr = 'INSERT INTO matches(id_users, match_id) VALUE (?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};
