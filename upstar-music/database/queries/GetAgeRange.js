const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  const minQuery = Artist
    .find({}) // returns an array of objects
    .sort({ age: 1 }) //sorts the array 
    .limit(1) //returns an ARRAY with one object 
    .then(artists => artists[0].age); // returns the age 

  const maxQuery = Artist
    .find({}) 
    .sort({ age: -1 }) 
    .limit(1) 
    .then(artists => artists[0].age); 

    return Promise.all([minQuery, maxQuery])
      .then((result) => { // the result with be an array of two numbers 
        return { min: result[0], max: result[1] }
      }); 
};

