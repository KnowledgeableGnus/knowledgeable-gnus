var models = require('./models.js');

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
  }

};