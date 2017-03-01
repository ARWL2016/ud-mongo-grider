Supertest allows us to fake http requests to our app. 
Body-parser - node body parsing middleware that improves on the express api. Used to be a part of express. Useful for POST requests. We can just call req.body. 

####API Structure 
- the express app is divided into three functions performed by: router, controller, and model.  
1. app.js requires express and creates the express app. It then does two things: first, it exports the app. Then, it calls the routes function and passes in the app. 
2. The app is passes to routes.js as a parameter to the function call. 
3. Inside routes.js, the app has a get function added to it and a controller function is specified. This controller function is imported from drivers_controller.js. 
4. In other words, the normal app.get() function has been split in two: a routing part and a controller function which actually processes the request and response. 
5. Notice that the controller exports an anonymous object, so we can access the contained function directly from the module name. 
6. Notice also that the routes file exports an anonymous function so that when routes is required into app.js it is not as an object but as a function. So we can call routes directly. This is done because app.js requires routes in  order to import the function. Routes cannot require app.js because that would be a circular dependency. Therefore, we pass app the other way as a parameter.  

####Environment Variables 
- defined on the physical machine outside of node
- it is a global variable that can be accessed inside of node  
- we can use the `NODE_ENV` variable to define development, test and production environments.
- `process.env.NODE_ENV`  
- It can be set inside npm scripts as `NODE_ENV=test`

####Creating a Test Environment and Database   
- We connect to mongodb in two places conditionally. This allows us to create a dev db (with full data) and a test db which we can drop each time. 
1. In app.js, we wrap the connection in an IF statement and only connect if `process.env.NODE_ENV !== "test"`  
2. In package.json, we use: `"test": "set NODE_ENV=test&& nodemon --exec mocha --recursive -R min"` or `"test": "set NODE_ENV=test&& nodemon --exec \"mocha --recursive -R list\""` to switch the env only when the test runs.  Note that the `set` and the `&&` are distinct to Windows.  
3. We then use the before hook in test_helper.js to connect to the test db.  

####Middleware 
- This is any code which operates between the incoming request and the outgoing response. So the routing itself could be considered middleware - though the routing function is also called the handler. Middleware processes the request object. E.g. body-parser adds on the req.body property. 
- next() - executes the next middleware in the chain. This must be called explicitly at each stage. So we declare our handler with (req, res, next) and if there is an error we can call catch(next). This will trigger the next middleware function on app.js. 
 
 ####Making a PUT Request 
 - Since a PUT request updates one record we need to know the id of the record. This is passed in the url (by convention) as `:id`
 - it is accessed in the handler by `req.params.id`
 - the Mongoose `findByIdAndUpdate` function does not return the update object but some statistics. Therefore, to return the object, we have to dive back into the db.  