var models = require('./models.js');
var geo = require('geo-helpers');

var populateDatabase = function(coords) {
    for (var i  = 0; i < coords.length; i++) {
      var params = ['Carl', coords[i][2], coords[i][0], coords[i][1]];
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
      coords.push([endLat + (Math.random() / 1000), endLong + (Math.random() / 1000), i * 300]);
    }
  }

  //Add Epoch time values for each coordinate
  for (var i = 0; i < coords.length; i++) {
    coords[i].push(startingTime + 300 * i);
  }

  populateDatabase(coords);

  return coords;
}

module.exports = {

  users: {
    get: function(req, res) {
      models.users.get(function(err, results) {
        if (err) {
          //console.log for now, handle appropriatly eventually
          console.log('error: ', err);
        }
        res.json(results);
      });
    },
    post: function(req, res) {
      var params = [req.body.username, req.body.password, req.body.address, req.body.email, req.body.createdAt];
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
      var params = [req.body.id_users, req.body.time, req.body.lat, req.body.lng];
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
      var params = [req.body.id_users, req.body.name, req.body.category, req.body.lat, req.body.lng];
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