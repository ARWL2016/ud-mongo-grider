const Artist = require('../models/artist');

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 * note that artistProps is ALREADY the object we need to define the instance, so we pass a variable representing an object
 */
module.exports = (artistProps) => {
  const artist = new Artist(artistProps); 
  
  return artist.save(); 
};
