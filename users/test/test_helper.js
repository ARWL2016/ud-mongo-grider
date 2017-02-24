const mongoose = require('mongoose'); 

// mongoose.Promise = global.Promise; 

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
    mongoose.connection.collections.users.drop(()=> {
      //ready to run next test, so call: 
      done(); 
    }); //wipes all records
  }); 