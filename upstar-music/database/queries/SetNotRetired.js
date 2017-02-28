const Artist = require('../models/artist');

/**
 * Sets a group of Artists as not retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {

  return Artist.update(
    {_id: { $in: _ids } }, //select all the records with ids in the id array passed in
    { retired: false }, 
    { multi: true } //options object - allow for multiple updates 
  );

};
