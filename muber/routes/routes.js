const DriversController = require('../controllers/drivers_controller'); 

module.exports = (app) => {
  app.get('/api', DriversController.greeting); 

  app.post('/api/drivers', DriversController.create);
  app.put('/api/drivers/:id', DriversController.edit);
  app.delete('/api/drivers/:id', DriversController.delete);
  app.get('/api/drivers', DriversController.index); 
}; 

// the index is the conventional name for a function which just returns a list of records