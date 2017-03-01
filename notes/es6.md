####Arrow Functions and This
- When using the virtual schema, we want THIS to be bound to the object where the function was called, so we must use the FUNCTION keyword. 
- In a () => {} function, THIS will be bound to the global scope. 
- If there is only one parameter, and it is a simple identifier (no default value or destructuring), the () can be omitted: `.then(count => {})`. But if there is no parameter, we need to include () to signify the function. 

####Promises  
- chained promises are executed sequentially  
- the result of the first promise can be captured in the parameter of the second in two ways. First: use the return keyword. Second: use the one-line fat arrow form: `.then(() => User.findOne({name: 'Joe'}))`. This implicitly returns the result.  
- We can call a promise directly on joe.save(). But, if this function is inside a .then() function, and we want to chain another then(), we must do `return joe.save()` or use the one-line fat arrow as previously. See subdocument_test.js line 29. 
- this type of chaining removes the need for ugly nested callbacks.  
- `Promise.all([])` - This takes an array of async function and returns resolved only when all functions have returned successfully. 

####Object Destructuring
- { _id: _id } can be replaced by { _id } in es6.  

####Interpolated Keys 
- WARN: We CANNOT just declare an object in literal notation and use a variable for a key. 
- In es5, we have to do this: 
  `const sortProperty = 'name';`
  `const sortOrder = {}`
  `const sortOrder[sortProperty] = 1`
- In other words, we must create the object first, then use bracket notation to pass a variable as a key. 
- In es6, this approach can be condensed to an object literal approach: 
 `{ [sortProperty]: 1 }`  

 ####Object Methods  
 - in es5 we put a method on an object like this: `{ property: function() {} }`
 - in es6, we can just write: `{ greeting() {} } `