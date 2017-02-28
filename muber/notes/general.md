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