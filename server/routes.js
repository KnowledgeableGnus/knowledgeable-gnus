var controller = require('./controllers.js');
var router = require('express').Router();

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.get('/coordinates', controller.coordinates.get);

router.post('/coordinates', controller.coordinates.post);

router.get('/locations', controller.locations.get);

router.post('/locations', controller.locations.post);

router.get('/profiles', controller.profiles.get);

router.post('/profiles', controller.profiles.post);

router.put('/profiles', controller.profiles.put);

router.get('/status', controller.status.get);

router.post('/status', controller.status.post);

router.get('/images', controller.images.get);

router.post('/images', controller.images.post);

router.get('/interests', controller.interests.get);

router.post('/interests', controller.interests.post);

router.get('/matches', controller.matches.get);

router.post('/matches', controller.matches.post);

module.exports = router;

