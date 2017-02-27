const mongoose = require('mongoose'); 
const AlbumSchema = require('./album'); 
const {Schema} = mongoose; 

const ArtistSchema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required']
  }, 
  age: { 
    type: Number, 
    required: [true, 'Age is required']
  }, 
  yearsActive: { 
    type: Number, 
    required: [true, 'Number of years active is required']
  }, 
  image: { 
    type: String, 
    required: false
  }, 
  genre: { 
    type: String, 
    required: [true, 'Name is required']
  }, 
  website: { 
    type: String, 
    required: false
  }, 
  netWorth: { 
    type: Number, 
    required: false
  }, 
  labelName: { 
    type: String, 
    required:false
  }, 
  retired: { 
    type: Boolean, 
    required: false
  }, 
  Albums: [AlbumSchema]
}); 

const Artist = mongoose.model('artist', ArtistSchema); 

module.exports = Artist; 
