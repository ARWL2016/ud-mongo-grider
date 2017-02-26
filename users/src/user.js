const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const PostSchema = require('./post');

mongoose.Promise = global.Promise; //correct location??

const UserSchema = new Schema({
  name: {
    type: String, 
    validate: {
      validator: (name) => name.length > 2, 
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  }, 
  posts: [PostSchema], 
  likes: Number, 
  //set up assocation with blogposts collection
  blogPosts: [{
    type: Schema.Types.ObjectId, 
    ref: 'blogPost'
  }]
});

//referencing postCount (ie joe.postCount) will run the function in get
// we can use THIS inside the get function to refer to the instance of the model we are working on 
UserSchema.virtual('postCount').get(function() {
  return this.posts.length; 
});

UserSchema.pre('remove', function(next) {
  const BlogPost = mongoose.model('blogPost'); //better than require, only invoked at function runtime  
  //this === for example, joe

  BlogPost.remove({_id: { $in: this.blogPosts }})
    .then(() => next());
  //if the id is IN this.blogPosts, remove it  (like a FOR IN) 
  //next() - go on to the next middleware
});

//create a model with the schema 'Userschema' and the collection 'user'
//model == class 
//User represents the entire collection
const User = mongoose.model('user', UserSchema); 

module.exports = User; 