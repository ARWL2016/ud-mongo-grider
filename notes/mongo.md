####General notes 
- remember to run mongod first!
- all operations on the db are async 
- Mongoose's internal promise library is deprecated, so we use ES6 promises: `mongoose.Promise = global.Promise;`. Note that in the course he places this line before mongoose.connect. But it only works with this version if I place it before defining the model. Herehttp://mongoosejs.com/docs/promises.html it is done on the actual test file. 

####Model: Functions and Properties
- save() - saves an instance to its collection, returns a promise  
- isNew - returns true if the instance has not been saved to a collection 