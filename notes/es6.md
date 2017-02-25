####Arrow Functions and This
- When using the virtual schema, we want THIS to be bound to the object where the function was called, so we must use the FUNCTION keyword. 
- In a () => {} function, THIS will be bound to the global scope. 

####Promises  
- chained promises are executed sequentially  
- the result of the first promise can be captured in the parameter of the second in two ways. First: use the return keyword. Second: use the one-line fat arrow form: `.then(() => User.findOne({name: 'Joe'}))`. This implicitly returns the result.  
- We can call a promise directly on joe.save(). But, if this function is inside a .then() function, and we want to chain another then(), we must do `return joe.save()` or use the one-line fat arrow as previously. See subdocument_test.js line 29. 
- this type of chaining removes the need for ugly nested callbacks.  
