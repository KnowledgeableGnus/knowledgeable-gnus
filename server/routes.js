var controller = require('./controllers.js');
var passport = require('passport');
var router = require('express').Router();

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.get('/coordinates', controller.coordinates.get);

router.post('/coordinates', controller.coordinates.post);

router.get('/locations', controller.locations.get);

router.post('/locations', controller.locations.post);

router.get('/auth/facebook', passport.authenticate('passport'))

//router.get('/locationtime', controller.locationtime);

module.exports = router;

//session store (db)

//parse cookie
//set session  => req.session ={user: username}
//middleware
//route handler, logic