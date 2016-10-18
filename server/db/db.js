var Sequelize = require('sequelize');

var db = new Sequelize(process.env.composeURI);

db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

var PossibleActivities = db.define('possibleactivities', {
  name: {type: Sequelize.STRING},
  picture: {type: Sequelize.STRING},
  description: {type: Sequelize.STRING},
  address: {type: Sequelize.STRING}
});

var SavedActivities = db.define('savedactivities', {
  name: {type: Sequelize.STRING},
  picture: {type: Sequelize.STRING},
  description: {type: Sequelize.STRING},
  address: {type: Sequelize.STRING}
});

var Trip = db.define('trip', {
  uuid: {type: Sequelize.STRING},
  password: {type: Sequelize.STRING},
  locationName: {type: Sequelize.STRING}
});

PossibleActivities.belongsTo(Trip);
SavedActivities.belongsTo(Trip);
Trip.hasMany(PossibleActivities, {as: 'PossibleActivitiesId'});
Trip.hasMany(SavedActivities, {as: 'SavedActivitiesId'});


PossibleActivities.sync().then(function() {
  return PossibleActivities.create({
    name: 'testname',
    picture: 'testpic',
    description: 'testdesc',
    address: 'testaddress'
  });
});

SavedActivities.sync().then(function() {
  return SavedActivities.create({
    name: 'testname',
    picture: 'testpic',
    description: 'testdesc',
    address: 'testaddress'
  });
});

Trip.sync().then(function() {
  return Trip.create({
    uuid: 'testuuid',
    password: 'testpw',
    locationName: 'testloc',
  });
});


module.exports = db;
