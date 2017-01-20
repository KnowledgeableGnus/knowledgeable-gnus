var chai = require('chai');
var expect = chai.expect;
var chaiHTTP = require('chai-http');
var server = require('../server/app');

chai.use(chaiHTTP);

describe('server', function() {

  describe('GET', function() {

    before(function(done) {
      var params = {
        username: 'Mike',
        password: 'password',
        address: '1600 Penn Ave',
        email: 'mike@mike.com',
        createdAt: '2017-01-16 15:15:15'
      }
      chai.request(server).post('/users').send(params).end((err, res) => {
        done();
      });
    });
    
    // beforeEach(function(done) {
    //   console.log('test');
    //   done();
    // });

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

    it('should return 200 when GET request sent to /profiles', function(done) {
      chai.request(server).get('/profiles').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should return 200 when GET request sent to /status', function(done) {
      chai.request(server).get('/status').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should return 200 when GET request sent to /images', function(done) {
      chai.request(server).get('/images').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should return 200 when GET request sent to /interests', function(done) {
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
    it('should return 201 when POST request sent to /users', function(done) {
      var params = {
        username: 'Mike',
        password: 'password',
        address: '1600 Penn Ave',
        email: 'mike@mike.com',
        createdAt: '2017-01-16 15:15:15'
      }
      chai.request(server).post('/users').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });

    it('should return 201 when POST request sent to /coordinates', function(done) {
      var params = {
        id_users: 1,
        location: {
          coords: {
            timestamp: 1484083067,
            latitude: 41.015137,
            longitude: 28.979530
          },
        }
      }
      chai.request(server).post('/coordinates').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });

    it('should return 201 when POST request sent to /locations', function(done) {
      var params = {
        id_users: 1,
        name: 'Burger shop',
        category: 'restaurants',
        lat: 33.394266,
        long: -104.523024
      }
      chai.request(server).post('/locations').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });

    it('should return 201 when POST request sent to /categoryStats', function(done) {
      var params = {
        id_users: 1,
        name: 'Burger shop',
        enter_time: 1484083060,
        exit_time: 0
      }
      chai.request(server).post('/categoryStats').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });

    it('should return 201 when POST request sent to /profiles', function(done) {
      var params = {
        id_users: 1,
        first_name: 'Mike',
        last_name: 'Dwyer',
        gender: 'male',
        state: 'NY',
        image: 'Image location here',
        status: 'I love writing tests with mocha and chai!',
        push: false
      }
      chai.request(server).post('/profiles').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });

    it('should return 201 when POST request sent to /status', function(done) {
      var params = {
        id_users: 1,
        status: 'This is my status, right here'
      }
      chai.request(server).post('/status').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });

    it('should return 201 when POST request sent to /images', function(done) {
      var params = {
        id_users: 1,
        image: 'This is my image, right here'
      }
      chai.request(server).post('/images').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });

    it('should return 201 when POST request sent to /interests', function(done) {
      var params = {
        id_users: 1,
        interests: 'Sleep'
      }
      chai.request(server).post('/interests').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });

    it('should return 201 when POST request sent to /matches', function(done) {
      var params = {
        id_users: 1,
        match_id: 2
      }
      chai.request(server).post('/matches').send(params).end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
    });


    it('should return 404 when invalid route specified', function(done) {
      var params = {
        foo: 5,
        bar: 33
      }
      chai.request(server).post('/invalid').send(params).end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
    });
  })


  describe('PUT', function() {

    it('should return 200 when PUT request sent to /categoryStats', function(done) {
      var params = {
        exit_time: 1484083070,
        id_users: 1,
        name: 'Burger Shop'
      }
      chai.request(server).put('/categoryStats').send(params).end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });

    it('should return 200 when PUT request sent to /profiles', function(done) {
      var params = {
        image: 'this is an image url',
        id_users: 1
      }
      chai.request(server).put('/profiles').send(params).end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      })
    });

  })
});