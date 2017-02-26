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
//blogPosts model is normalised inside mongoose as blogposts
  beforeEach((done) => {
    const { users, comments, blogposts } = mongoose.connection.collections; 
    users.drop(()=> {
      comments.drop(() => {
        blogposts.drop(() => {
          done();
        }); //wipes all records
      }); 
    }); 
  }); 