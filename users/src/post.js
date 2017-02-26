// This is an embedded schema, so it does not create a model.  

const mongoose = require('mongoose');
const { Schema } = mongoose; 

const PostSchema = new Schema({
  title: String
});

module.exports = PostSchema; 