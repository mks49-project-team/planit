var Trip = require('../db').Trip;
var activityController = require('./activity.controller').activityController;
var authController = require('./auth.controller').authController;
var searchController = {};

searchController.POST = function(req, res) {
  console.log('inside tripController.POST');
  console.log('THIS IS DATAAAAA', req.body.locationName)
  return Trip.create({
    uuid: 'testuuid',
    password: 'testpw',
    locationName: req.body.locationName
  })
  .then(function(activity) {
    console.log("this is the hash", activity.dataValues.uuid)
    console.log("poopy", activity.dataValues.locationName)
    activityController.POST({ locationName: activity.dataValues.locationName, uuid: activity.dataValues.uuid })
    authController.hash = activity.dataValues.uuid;
    res.status(201).send(activity);
  })
  .catch(function(err) {
    console.log('err in saving selected activity', err);
    res.status(404).send(err);
  });
};


module.exports = {
  searchController: searchController
};
