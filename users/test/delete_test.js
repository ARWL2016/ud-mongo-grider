const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let joe; 

  beforeEach((done) => {
    joe = new User({name: 'Joe'}); 
    joe.save()
      .then(() => done()) 
  });

  it('should remove a model instance', (done) => {
    joe.remove()
      .then(() => User.findOne({name: 'Joe'})) 
      .then((user) => {
        assert(user === null);
        done(); 
      });
  });

  it('should remove records using the class method', (done) => {
    User.remove({name: 'Joe'}) 
      .then(() => User.findOne({name: 'Joe'})) 
      .then((user) => {
        assert(user === null);
        done(); 
      });

  });

  it('should remove one record using findOneAndRemove', (done) => {
    User.findOneAndRemove({name: 'Joe'})
      .then(() => User.findOne({name: 'Joe'})) 
      .then((user) => {
        assert(user === null);
        done(); 
      });
  });

  it('should remove using findByIdAndRemove', (done) => {
    User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({name: 'Joe'})) 
      .then((user) => {
        assert(user === null);
        done(); 
      });

  });
});