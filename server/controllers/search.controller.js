var Trip = require('../db').Trip;
var activityController = require('./activity.controller').activityController;
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
    console.log("poopy", activity.dataValues.locationName)
    activityController.POST(activity.dataValues.locationName)
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
