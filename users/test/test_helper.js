const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 

before((done) => {
  mongoose.connect('mongodb://localhost/users_test'); //will create this database on the fly
  mongoose.connection
    .once('open', () => {
      done(); 
    }) 
    .on('error', (error) => {
      console.warn('Warning', error); 
    });
}); 

//test hook
  beforeEach((done) => {
    const { users, comments, blogPosts } = mongoose.connection.collections; 
    users.drop(()=> {
      comments.drop(() => {
        blogPosts.drop(() => {
          done();
        }); //wipes all records
      }); 
    }); 
  }); 