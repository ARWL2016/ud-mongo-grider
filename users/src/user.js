const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
  name: String
});

//create a collection called 'user' using UserSchema
//model == class 
//User represents the entire collection
const User = mongoose.model('user', UserSchema); 

module.exports = User; 