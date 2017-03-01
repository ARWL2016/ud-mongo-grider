const assert = require('assert'); 
const request = require('supertest'); //called request by convention  
const mongoose = require('mongoose'); 
const app = require('../../app');
const Driver = mongoose.model('driver'); //using require here could lead to the model being created multiple times 
// to test the db we need mongoose and the model
// const Driver = require('../../models/drivers');

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
});