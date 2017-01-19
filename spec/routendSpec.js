var chai = require('chai');
var expect = chai.expect;
var chaiHTTP = require('chai-http');
var server = require('../server/app');

chai.use(chaiHTTP);

describe('server', function() {
  describe('GET', function() {
    it('should return 200 when GET request sent to /users', function() {
      chai.request(server).get('/users').end((err, res) => {
        expect(res.status).to.equal(200);
      });
    });
    it('should return 200 when GET request sent to /coordinates', function() {
      chai.request(server).get('/coordinates').end((err, res) => {
        expect(res.status).to.equal(200);
      });
    });
    it('should return 200 when GET request sent to /locations', function() {
      chai.request(server).get('/locations').end((err, res) => {
        expect(res.status).to.equal(200);
      });
    });
    it('should return 404 when invalid route specified', function() {
      chai.request(server).get('/invalid').end((err, res) => {
        expect(res.status).to.equal(404);
      });
    });
  });

  describe('POST', function() {
    it('should return 200 when POST request sent to /users', function() {
      var params = {
        username: 'Mike',
        password: 'password',
        address: '1600 Penn Ave',
        email: 'mike@mike.com',
        createdAt: null
      }
      chai.request(server).post('/users').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
      });
    });
    it('should return 200 when POST request sent to /coordinates', function() {
      var params = {
        id_users: null,
        time: 1484083067,
        lat: 41.015137,
        long: 28.979530
      }
      chai.request(server).post('/coordinates').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
      });
    });
    it('should return 200 when POST request sent to /locations', function() {
      var params = {
        id_users: null,
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