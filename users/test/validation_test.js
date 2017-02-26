const assert = require('assert');
const User = require('../src/user');
const chalk = require('chalk'); 

describe('Validating records', () => {
  it('requires a name', () => {
    const user = new User({name: undefined})
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name; 
    // console.log(chalk.red(message)); 

    assert(message === 'Name is required.'); 
  });

  it('requires a name longer than 2 characters', () => {
    const user = new User({name: 'Al'})
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name; 
    // console.log(chalk.red(message)); 

    assert(message === 'Name must be longer than 2 characters.'); 
  });

  it('doesn\'t save invalid records', () => {
    const user = new User({name: 'Al'});
    user.save() 
      .catch((validationResult) => {
          const { message } = validationResult.errors.name; 
          assert(message === 'Name must be longer than 2 characters.');
          // console.log(chalk.red(message)); 
      })


    

     
  });



}); 