var chai = require('chai');
var expect = chai.expect;
var chaiHTTP = require('chai-http');
var server = require('../server/app');

chai.use(chaiHTTP);

describe('server', function() {
  describe('GET', function() {
    it('should return 200 when GET request sent to /users', function(done) {
      chai.request(server).get('/users').query({email: 'mike@mike.com', password: 'password'}).end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
    it('should return 200 when GET request sent to /coordinates', function(done) {
      chai.request(server).get('/coordinates').end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
    it('should return 200 when GET request sent to /locations', function(done) {
      chai.request(server).get('/locations').end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
    it('should return 200 when GET request sent to /categoryStats', function(done) {
      chai.request(server).get('/categoryStats').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it('should return 200 when GEt request sent to /interests', function(done) {
      chai.request(server).get('/interests').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it('should return 200 when GET request sent to /matches', function(done) {
      chai.request(server).get('/matches').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it('should return 404 when invalid route specified', function(done) {
      chai.request(server).get('/invalid').end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
    });
  });

  describe('POST', function() {
    it('should return 201 when POST request sent to /users', function() {
      var params = {
        username: 'Mike',
        password: 'password',
        address: '1600 Penn Ave',
        email: 'mike@mike.com',
        createdAt: '2017-01-16 15:15:15'
      }
      chai.request(server).post('/users').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
      });
    });
    it('should return 201 when POST request sent to /coordinates', function() {
      var params = {
        id_users: 1,
        time: 1484083067,
        lat: 41.015137,
        long: 28.979530
      }
      chai.request(server).post('/coordinates').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
      });
    });
    it('should return 201 when POST request sent to /locations', function() {
      var params = {
        id_users: 1,
        name: 'Burger shop',
        category: 'restaurants',
        lat: 33.394266,
        long: -104.523024
      }
      chai.request(server).post('/locations').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
      });
    });
    it('should return 404 when invalid route specified', function() {
      var params = {
        foo: 5,
        bar: 33
      }
      chai.request(server).post('/invalid').send(params).end((err, res) => {
        expect(res.status).to.equal(404);
      });
    });
  })
});