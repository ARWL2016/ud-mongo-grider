const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const AlbumSchema = new Schema({
  title: {
    type: String, 
    required: [true, 'Title is required']
  }, 
  date: {
    type: Date, //global js date object 
    required: [true, 'Date is required']
  }, 
  copiesSold: {
    type: Number, 
    required: false
  }, 
  numberTracks: {
    type: Number, 
    required: false
  }, 
  image: {
    type: String, 
    required: [true, 'Image is required']
  }, 
  revenue: {
    type: Number, //currency is best stored as a raw number
    required: false
  }
}); 

module.exports = AlbumSchema; 
