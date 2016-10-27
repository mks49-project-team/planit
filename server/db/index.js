// Connect to database
var db = require('./db.js');

// Set table schema
var Trip = require('../models').Trip(db);
var Users = require('../models').Users(db);
var Chat = require('../models').Chat(db);
var PossibleActivities = require('../models').PossibleActivities(db);
var SavedActivities = require('../models').SavedActivities(db);
var PossibleExpedia = require('../models').PossibleExpedia(db);
var SavedExpedia = require('../models').SavedExpedia(db);

// Assign table relationships USERS

Users.hasMany(Chat, 			  {foreignKey: 'user_id', constraints: false});
Users.hasMany(PossibleExpedia, 	  {foreignKey: 'user_id', constraints: false});
Users.hasMany(PossibleActivities, {foreignKey: 'user_id', constraints: false});
Users.hasMany(SavedExpedia,		  {foreignKey: 'user_id', constraints: false});
Users.hasMany(SavedActivities,	  {foreignKey: 'user_id', constraints: false});

Trip.hasMany(Chat,				  {foreignKey: 'trip_id', constraints: false});
Trip.hasMany(PossibleExpedia,	  {foreignKey: 'trip_id', constraints: false});
Trip.hasMany(PossibleActivities,  {foreignKey: 'trip_id', constraints: false});
Trip.hasMany(SavedExpedia,		  {foreignKey: 'trip_id', constraints: false});
Trip.hasMany(SavedActivities,	  {foreignKey: 'trip_id', constraints: false});




// PossibleActivities.belongsTo(Trip); // will add trip id to activities
// SavedActivities.belongsTo(Trip);
// PossibleExpedia.belongsTo(Trip);
// SavedExpedia.belongsTo(Trip);



// Trip.hasMany(PossibleActivities, {foreignKey: 'PossibleActivitiesId', constraints: false/*, targetKey:*/ });
// Trip.hasMany(PossibleExpedia, {foreignKey: 'PossibleExpediaId', constraints: false});
// Trip.hasMany(SavedActivities, {foreignKey: 'SavedActivitiesId', constraints: false});
// Trip.hasMany(SavedExpedia, {foreignKey: 'SavedExpediaId', constraints: false});
// //trip id to activities


// Option {force: true} drop the table if it already exists
db.sync();

module.exports = {
  db: db,
  PossibleActivities: PossibleActivities,
  SavedActivities: SavedActivities,
  PossibleExpedia: PossibleExpedia,
  SavedExpedia: SavedExpedia,
  Trip: Trip,
  Users: Users,
  Chat: Chat
};
