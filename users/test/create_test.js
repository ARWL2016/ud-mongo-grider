const assert = require('assert'); //node built in module
const User = require('../src/user');

describe('Creating records', () => {
  it('should save a user', (done) => {
    const joe = new User({ name: 'Joe'}); //creates a new instance of the model

    joe.save() //uses the save() func from the model
      .then(() => {
        assert(!joe.isNew); 
        done(); 
      });
  });
});