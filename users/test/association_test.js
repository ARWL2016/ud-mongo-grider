const assert = require('assert');
const mongoose = require('mongoose'); 
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');
const Chalk = require('chalk'); 

describe('Associations', () => {
  let joe, blogPost, comment; 

  beforeEach((done) => {
    joe = new User({name: 'Joe'}); 
    blogPost = new BlogPost({title: 'JS is great', content: 'Yeah!'}); 
    comment = new Comment({ content: 'Great Post'}); 

    joe.blogPosts.push(blogPost); //mongoose will now set up the association by pushing the ObjectID
    blogPost.comments.push(comment); 
    comment.user = joe; //magic! Just sets a reference  

    Promise.all([joe.save(), blogPost.save(), comment.save()])
      .then(() => done());
  });
  
  
  it('saves a relation between user and blogpost', (done) => {
    User.findOne({ name: 'Joe'})
    .populate('blogPosts')
      .then((user) => {
        // console.log(Chalk.blue(user));
        assert(user.blogPosts[0].title === 'JS is great'); 
        done(); 
      }); 
  });

  it('saves a full relation graph', (done) => {
    User.findOne({ name: 'Joe'})
    .populate({
      path: 'blogPosts',
      populate: {
        path: 'comments', 
        model: 'comment',
        populate: {
          path: 'user', 
          model: 'user'
        }
      }   
    })
    .then((user) => {
      // console.log(Chalk.blue(user.blogPosts[0].comments)); 
      assert(user.name === 'Joe'); 
      assert(user.blogPosts[0].title === 'JS is great'); 
      assert(user.blogPosts[0].comments[0].content === 'Great Post'); 
      assert(user.blogPosts[0].comments[0].user.name === 'Joe');

      done(); 
    }); 

  });
});
