const assert = require('assert'); 
const request = require('supertest'); //called request by convention  
const app = require('../app');

describe('The express app', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => { //check supertest docs for use of error
        assert(response.body.hi === 'there'); 
        done(); 
      });
  }); 
});