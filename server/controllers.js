var models = require('./models.js');
var geo = require('geo-helpers');
var crypto = require('crypto');

var populateDatabase = function(coords) {
    for (var i  = 0; i < coords.length; i++) {
      var params = [1, coords[i][2], coords[i][0], coords[i][1]];
      models.coordinates.post(params, function(err, results) {
        if (err) {
          console.log('error: ', err);
        }
      });
    }
  }

var mockData = function(centralLat, centralLong, startingTime) {
  var numPoints = Math.ceil(Math.random() * 6);
  var coords = [];
  var startLat, startLong, endLat, endLong;
  for (var i = 0; i < numPoints; i++) {
    startLat = centralLat + Math.random() / 10;
    startLong = centralLong + Math.random() / 10;
    endLat = centralLat + Math.random() / 10;
    endLong = centralLong + Math.random() / 10;
    coords = coords.concat(geo.interpolatePoints(startLat, startLong, endLat, endLong, 100));

    //Stub minimum of 2 hours of coordinates at each location
    for (var j = 0; j < 24 + Math.random() * 96; j++) {
      coords.push([endLat + (Math.random() / 1000), endLong + (Math.random() / 1000)]);
    }
  }

  //Add Epoch time values for each coordinate
  for (var i = 0; i < coords.length; i++) {
    coords[i].push(startingTime + 300 * i);
  }

  populateDatabase(coords);

  return coords;
}

var genRandomString = function(length) {
  return crypto.randomBytes(Math.ceil(length/2))
          .toString('hex')
          .slice(0, length)
};

var sha512 = function(password, salt) {
  var hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value
  };
};

var saltHashPassword = function(userpassword) {
  var salt = genRandomString(16);
  var passwordData = sha512(userpassword, salt);
  return passwordData;
}



module.exports = {

  users: {
    get: function(req, res) {
      var params = [req.query.email];
      models.users.get(params, function(err, results) {
        if (err) {
          //console.log for now, handle appropriatly eventually
          console.log('error: ', err);
        }
        var validate = sha512(req.query.password, results[0].salt);
        if(validate.passwordHash === results[0].hash){
          console.log('validated');
          res.json(results);
        } else {
          res.sendStatus(401);
        }
      });
    },
    post: function(req, res) {
      var passwordData = saltHashPassword(req.body.password);

      var params = [req.body.username, passwordData.passwordHash, passwordData.salt, req.body.address, req.body.email, req.body.createdAt];
      models.users.post(params, function(err, results) {
        if (err) {
          console.log('error: ', err);
        }
        res.sendStatus(201);
      });
    }
  },
  coordinates: {
    get: function(req, res) {
      var params = [req.query.id_users , req.query.start, req.query.end];
      models.coordinates.get(params, function(err, results) {
        if (err) {
          console.log('error: ', err);
        }
        res.json(results);
      });
    },
    post: function(req, res) {
      var params = [req.body.id_users, req.body.time, req.body.lat, req.body.long];
      models.coordinates.post(params, function(err, results) {
        if (err) {
          console.log('error: ', err);
        }
        res.sendStatus(201);
      });
    }
  },
  locations: {
    get: function (req, res) {
      var params = [req.query.id_users];
      models.locations.get(params, function(err, results) {
        if (err) {
          console.log('error: ', err);
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.id_users, req.body.name, req.body.category, req.body.lat, req.body.long];
      models.locations.post(params, function(err, results) {
        if (err) {
          console.log('error: ', err);
        }
        res.sendStatus(201);
      })
    }
  },

  populateDatabase: populateDatabase,
  mockData: mockData

  // locationTime: function(req, res) {
  //   var params = [req.body.id_users];
  //     models.locations.get(params, function(err, results) {
  //       if (err) {
  //         console.log('error: ', err);
  //       }
        
  //       for (var i = 0; i < results.length; i++) {
  //         if (geo.findGeodesic()) {
            
  //         }
  //       }

  //     });

  // }

};