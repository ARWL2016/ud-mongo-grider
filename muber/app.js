const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const routes = require('./routes/routes');

const app = express(); 

mongoose.Promise = global.Promise; 
console.log(process.env.NODE_ENV); 
if (process.env.NODE_ENV !== "test") {
  mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json()); //parse incoming requests as JSON into objects. MUST COME BEFORE ROUTES. 
routes(app); 

app.use((err, req, res, next) => {
  res.status(422).send({error: err.message}); // 422 for validation errors
}); 

module.exports = app; 