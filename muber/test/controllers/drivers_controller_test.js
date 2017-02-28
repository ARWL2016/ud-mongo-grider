const assert = require('assert'); 
const request = require('supertest'); //called request by convention  
const app = require('../../app');

describe('Drivers controller', () => {
  it('POST request to /api/drivers creates a new driver', (done) => {
    request(app)
      .post('/api/drivers')
      .send({ email: 'test@test.com' }) //ie send to the server 
      .end((err, response) => { //check supertest docs for use of error
        // assert(response.body.hi === 'there'); 
        done(); 
      });
  }); 
});