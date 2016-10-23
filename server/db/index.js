var db = require('./db.js');

var PossibleActivities = require('../models').PossibleActivities(db);
var PossibleExpedia = require('../models').PossibleExpedia(db);
var SavedActivities = require('../models').SavedActivities(db);
var Trip = require('../models').Trip(db);

PossibleActivities.belongsTo(Trip);
PossibleExpedia.belongsTo(Trip);
SavedActivities.belongsTo(Trip);
Trip.hasMany(PossibleActivities, {as: 'PossibleActivitiesId'});
Trip.hasMany(PossibleExpedia, {as: 'PossibleExpediaId'})
Trip.hasMany(SavedActivities, {as: 'SavedActivitiesId'});

// Option { force: true } overwrites existing tables.
db.sync();

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
//   image: 'testpic',
//   description: 'testdesc',
//   address: 'testaddress'
// });
//
// SavedActivities.create({
//   name: 'testname',
//   image: 'testpic',
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
  PossibleExpedia: PossibleExpedia,
  SavedActivities: SavedActivities,
  Trip: Trip
};
