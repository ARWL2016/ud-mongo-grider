####General notes 
- remember to run mongod first!
- all operations on the db are async 
- Mongoose's internal promise library is deprecated, so we use ES6 promises: `mongoose.Promise = global.Promise;`. Note that in the course he places this line before mongoose.connect. But it only works with this version if I place it before defining the model. Herehttp://mongoosejs.com/docs/promises.html it is done on the actual test file. 
 

####Model Instance: Functions and Properties
- `save()` - saves an instance to its collection, returns a **promise**  
- `remove()` - deletes SINGLE instance from db, returns the **removed object**    
- `isNew` - returns true if the instance has not been saved to a collection   
- `set()` - changes the value of a given property of an instance in memory - use with `save()` to achieve a db update. Set is not async. Takes a property value pair, e.g. `set('name', 'Joe')`
- `update()` - 

####Model Class: Methods    
- `find()` - finds all users that match the criteria, returns an **array**. If you pass find({}) it will return the whole collection    
- `findOne()` - finds the first user that matches the criteria, returns an **object**   
- `remove()` -  deletes ALL users that match passed criteria  
- `findOneAndRemove()` - deletes one user that match passed criteria  
- `findByIdAndRemove()` - deletes one user that match id (can pass in raw id or object)
- `update()` - sets and saves - pass two objects. 
- `findOneAndUpdate()` - sets and saves - pass two objects. 
- `findByIdAndUpdate()` - sets and saves - pass id and object. 

####ObjectId 
- ids are assigned by mongoose when a new record is created (even before being sent to the db) 
- these are objects. Use `_id.toString()` to get a string value when making a comparison.  
- However, we can use `User.findOne({ _id: joe_id})` to retrieve a value. Mongoose can deal with this internally.   

####Promises  
- chained promises are executed sequentially  
- the result of the first promise can be captured in the parameter of the second  
- this type of chaining removes the need for ugly nested callbacks  