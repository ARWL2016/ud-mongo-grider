//remember to run mongod first! 

const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/users_test'); //will create this database on the fly
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning', error); 
  });