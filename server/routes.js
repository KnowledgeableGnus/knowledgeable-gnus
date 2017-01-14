var controller = require('./controllers.js');
var passport = require('passport');
var router = require('express').Router();

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.get('/coordinates', controller.coordinates.get);

router.post('/coordinates', controller.coordinates.post);

router.get('/locations', controller.locations.get);

router.post('/locations', controller.locations.post);

router.get('/profiles', controller.profiles.get);

router.post('/profiles', controller.profiles.post);

router.get('/interests', controller.interests.get);

router.post('/interests', controller.interests.post);

module.exports = router;

