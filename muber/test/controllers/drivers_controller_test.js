const assert = require('assert'); 
const request = require('supertest'); //called request by convention  
const mongoose = require('mongoose'); 
const app = require('../../app');
const Driver = mongoose.model('driver'); //using require here could lead to the model being created multiple times 
// to test the db we need mongoose and the model
// const Driver = require('../../models/drivers');
mongoose.Promise = global.Promise; 

describe('Drivers controller', () => {
  it('POST request to /api/drivers creates a new driver', (done) => {
    Driver.count().then(count => {

      request(app)
      .post('/api/drivers')
      .send({ email: 'test@test.com' }) //ie send to the server 
      .end(() => { 
        
        Driver.count().then(newCount => {
          assert(count + 1 === newCount);
          done(); 
        });   
      });
    })
  }); 

  it('PUT to /api/drivers/id edits an existing driver', done => {
    const driver = new Driver({ email: 'test@test.com', driving: false }); 

    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`) 
        .send({ driving: true })
        .end(() => {
          Driver.findOne({ email: 'test@test.com' })
            .then(driver => {
              assert(driver.driving === true);
              done(); 
            });
        });
    });
  }); 

  it('DELETE to /api/drivers/id deletes a driver', done => {

    const driver = new Driver({ email: 'test@test.com' }); 

    driver.save().then(() => {
          request(app)
            .delete(`/api/drivers/${driver._id}`) //gets id from model instance
            .end(() => {
              Driver.findOne({ email: 'test@test.com' })
              .then((driver) => {
                assert(driver === null); 
                done(); 
              });
            });
    });
  });

  it('GET tp /api/drivers finds drivers in a location', done => {
    const  seattleDriver = new Driver({
      email: 'seattle@test.com', 
      geometry: { type: 'Point', coordinates: [-122, 47] }
    }); 
    const  miamiDriver = new Driver({
      email: 'miami@test.com', 
      geometry: { type: 'Point', coordinates: [-80, 25] }
    }); 
    Promise.all([seattleDriver.save(), miamiDriver.save() ])
      .then(() => {
        request(app)
          .get('/api/drivers?lng=-80&lat=25')
          .end((err, response) => {
            assert(response.body.length === 1); 
            assert(response.body[0].obj.email === 'miami@test.com'); 
            done(); 
          });
      });
  });   
});