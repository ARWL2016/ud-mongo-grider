###Mongoose Notes 

####General notes 
- remember to run mongod first!
- all operations on the db are async 
- Mongoose's internal promise library is deprecated, so we use ES6 promises: `mongoose.Promise = global.Promise;`. Note that in the course he places this line before mongoose.connect. But it only works with this version if I place it before defining the model. Herehttp://mongoosejs.com/docs/promises.html it is done on the actual test file. 
- for performance, manipulate data ON the mongoDB server whenever possible. Use the update operators: https://docs.mongodb.com/manual/reference/operator/update/ 
- We have a server side model instance that is created by instantiating the model `var joe = new User({name: 'Joe'})`. We also have mongoDB side collection which is represented by the model itself. The instance and the model have different methods, and the instance must be explicitly updated by server side code. It is not affected by the db itself.  
- In Mongo, unlike in relational dbs, datasets are related by nesting. We can have embedded or nested schemas, but they will be included in one model and one collection. This idea is called sub-documents.
- the return value from query the database will be a model instance with the methods below. So this model instance can be created by calling `new` or by retrieving from the db. 
 

####Model Instance: Functions and Properties (use on server-side)
- `save()` - saves an instance to its collection, returns a **promise**  
- `remove()` - deletes SINGLE instance from db, returns the **removed object**. We can also use `remove()`    on subdocuments (l.46) - which works directly on the model instance returned from the db.   
- `isNew` - returns true if the instance has not been saved to a collection   
- `set()` - changes the value of a given property of an instance in memory - use with `save()` to achieve a db update. Set is not async. Takes a property value pair, e.g. `set('name', 'Joe')`
- `update()` - sets and saves
- `validateSync()` - validates an instance based on the schema and returns immediately. [cf validate() which operates asynchronously and uses a callback]. The error message can be defined in the schema and accessed with: `const validationResult = user.validateSync(); const { message } = validationResult.errors.name;`. Invalid data cannot be saved to the database. The save() function will return an error object which we can grab with catch(). 

####Model Class: Methods (use on mongoDB side)    
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

####Virtual Types / Properties / Fields   
- This is any field of data on our model exists on the server but does not get persisted to the db.
- These are useful for derivative properties.  
- They are not included in the Schema definition. They are added to the schema using `virtual('property').get(function(){})`. Then, when we reference the property name `joe.property`, it will return a value from the function inside get scoped to the current instance of the model. For this reason, we cannot use the `() => {}` function which is globally scoped.  


