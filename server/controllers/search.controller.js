var Trip = require('../db').Trip;
var activityController = require('./activity.controller');
var authController = require('./auth.controller');

var searchController = {};

/* *
 * Ask Jongsoo and Oliver
 * */
searchController.POST = function(req, res) {
  return Trip.create({
    //uuid: 'testuuid',
    password: 'testpw',
    locationName: req.body.locationName
  })

  //yelp search?
  
  .then(function(activity) {
    console.log(activity, "123123")

    activityController.POST({
      locationName: activity.dataValues.locationName,
      uuid: activity.dataValues.id
    });
    activityController.POSTEXPEDIA({
      locationName: activity.dataValues.locationName,
      uuid: activity.dataValues.id
    });
    authController.hash = activity.dataValues.uuid;
    res.status(201).send(activity);
  })
  .catch(function(err) {
    res.status(404).send(err);
  });
};

module.exports = searchController;
