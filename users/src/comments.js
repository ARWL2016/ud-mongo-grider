const mongoose = require('mongoose'); 
const {Schema} = mongoose; 

const CommentSchema = new Schema({
  content: String, 
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'user' //refers to the user collection
  }
}); 

const Comment = mongoose('comment', CommentSchema); 

module.exports = Comment; 