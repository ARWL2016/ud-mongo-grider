const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

mongoose.Promise = global.Promise; //correct location??

const UserSchema = new Schema({
  name: String
});

//create a model with the schema and the 'user' collection
//model == class 
//User represents the entire collection
const User = mongoose.model('user', UserSchema); 

module.exports = User; 