####Basic Mocha Setup 
1. npm install mocha  
2. Create a test file such as `*test.js`  
3. To use Node's built in assertion module: `const assert = require('assert');`  
4. The `describe` and `it` functions are native to Mocha.  
5. Add "mocha" to package.json scripts. It will not run directly in the cmd without a global install. 
6. Note that running the test will also run `test_helper.js`. 

####Mocha notes  
1. We should use the async func `done()` when doing a db operation. This delays the test until the operation is finished.  
2. We can use hooks, such as before() and beforeEach() to access the db at specific moments in the test cycle
