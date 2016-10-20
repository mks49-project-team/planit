var db = require('./db.js');

var PossibleActivities = require('../models').PossibleActivities(db);
var SavedActivities = require('../models').SavedActivities(db);
var Trip = require('../models').Trip(db);

PossibleActivities.belongsTo(Trip);
SavedActivities.belongsTo(Trip);
Trip.hasMany(PossibleActivities, {as: 'PossibleActivitiesId'});
Trip.hasMany(SavedActivities, {as: 'SavedActivitiesId'});

// Option force: true overwrites existing tables.
db.sync({ force: true });

/* *
 *  To test if you've setup your routes and connection to the
 *  database correctly, copy-and-paste the function that relates to
 *  your component to your controller, and use Postman to make a POST request
 *  to your endpoint.
 *
 *  Our database should respond with the record that was created.
 *  For an example, you can make a 'POST' request to localhost:8000/api/itinerary
 * */

// PossibleActivities.create({
//   name: 'testname',
//   picture: 'testpic',
//   description: 'testdesc',
//   address: 'testaddress'
// });
//
// SavedActivities.create({
//   name: 'testname',
//   picture: 'testpic',
//   description: 'testdesc',
//   address: 'testaddress'
// });
//
// Trip.create({
//     uuid: 'testuuid',
//     password: 'testpw',
//     locationName: 'testloc',
// });

module.exports = {
  db: db,
  PossibleActivities: PossibleActivities,
  SavedActivities: SavedActivities,
  Trip: Trip
};
