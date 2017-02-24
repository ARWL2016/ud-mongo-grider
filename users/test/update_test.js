const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let joe; 

  beforeEach((done) => {
    joe = new User({name: 'Joe'}); 
    joe.save()
      .then(() => done()) 
  });

  function assertName(operation, done) {
    operation
    .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1); 
        assert(users[0].name === 'Alex'); 
        done();
      });
  }

  it('should set and save an instance', (done) => {
    joe.set('name', 'Alex'); 
    assertName(joe.save(), done);  
  });

  it('should update an instance', (done) => {
    assertName(joe.update({name: 'Alex'}), done); 
  });

  it('should update a record', (done) => {
    assertName(
      User.update({name: 'Joe'}, {name: 'Alex'}),
      done
    );

  });

  it('should update one record', (done) => {
    assertName(
      User.findOneAndUpdate({name: 'Joe'}, {name: 'Alex'}),
      done
    ); 
  });

  it('should update one record by id', (done) => {
    assertName(
      User.findByIdAndUpdate(joe._id, {name: 'Alex'}),
      done
    ); 
    
  });


}); 