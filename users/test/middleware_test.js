const mongoose = require('mongoose'); 
const assert = require('assert');
const User = require('../src/user'); 
const BlogPost = require('../src/blogPost');

describe('Middleware', () => {
  let joe, blogPost; 

  beforeEach((done) => {
    joe = new User({name: 'Joe'}); 
    blogPost = new BlogPost({title: 'JS is great', content: 'Yeah!'}); 
     
    joe.blogPosts.push(blogPost); //pushes ID for assoc

    Promise.all([joe.save(), blogPost.save()])
      .then(() => done());
  });

  it('users clean up dangling blogposts on remove', (done) => {
    joe.remove()
      .then(() => BlogPost.count())
      .then((count) => {
        assert(count === 0);
        done(); 
      });
  });
});