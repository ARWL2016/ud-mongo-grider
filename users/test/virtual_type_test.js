const assert = require('assert');
const User = require('../src/user');
const chalk = require('chalk'); 

describe('Virtual types', () => {
  it('post count returns number of posts', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{title: 'PostTitle'}]
    });
    // save and retrieve not necessary here, but more realistic
    joe.save()
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        assert(joe.postCount === 1); 
        done(); 
      })
  });
});