const express = require('express'); 
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express(); 

app.use(bodyParser.json()); //parse incoming requests as JSON into objects. MUST COME BEFORE ROUTES. 
routes(app); 

module.exports = app; 