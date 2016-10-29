var rp = require('request-promise');
var PossibleActivities = require('../db').PossibleActivities;
var PossibleExpedia = require('../db').PossibleExpedia;
var yelpSearch = require('../helpers/activityHelper').yelpSearch;
var Trip = require('../db').Trip;

var activityController = {};

/* *
 * Get all previously found Yelp activities for a specific trip/uuid.
 * */
activityController.GET = function(req, res) {
  Trip.findOne({
    where: {
      uuid: req.query.uuid
    }
  })
  .then(function(trip) {
    PossibleActivities
      .findAll({
        where: {
          trip_id: trip.dataValues.id
        }
      })
      .then(function(activity) {
        res.status(200).json(activity);
      })
      .catch(function(err) {
        res.status(418).send(err);
      });
  });
};

/* *
 * Make an API call to Yelp, finding all activities for a location,
 * and save them to the PossibleActivities table with the correct uuid.
 * */
activityController.POST = function(req, res) {
  yelpSearch(req.locationName, req.uuid)
    .then(function(searchResults) {
      PossibleActivities.bulkCreate(searchResults);
    })
    .then(function(savedActivities) {
      res.status(200).json(savedActivities);
    })
    .catch(function(err) {
      res.status(418).send(err);
    });
};

/* *
 * Get all previously found Expedia activities for a specific trip/uuid.
 * */
activityController.GETEXPEDIA = function(req, res) {
  Trip.findOne({
    where: {
      uuid: req.query.uuid
    }
  })
  .then(function(trip) {
    PossibleExpedia
    .findAll({
      where: {
        trip_id: trip.dataValues.id
      }
    })
    .then(function(expediaActivity) {
      res.status(200).send(expediaActivity);
    })
    .catch(function(err) {
      res.status(418).send(err);
    });
  });
};

/* *
 * Make an API call to Expedia, finding all activities for a location,
 * and save them to the PossibleActivities table with the correct uuid.
 * */
activityController.POSTEXPEDIA = function(req, res) {
  var url = 'http://terminal2.expedia.com/x/activities/search?location=' + req.locationName + '&apikey=' + process.env.expedia_api_key;
  var options = {
    method: 'POST',
    uri: url,
    json: true
  };
  rp(options)
    .then(function(body) {
      body.activities.slice(0, 20)
      var data = body.activities.map(function(expediaResult) {
        return {
          trip_id: req.uuid,
          title: expediaResult.title,
          imageUrl: expediaResult.imageUrl,
          recommendationScore: expediaResult.recommendationScore,
          fromPrice: expediaResult.fromPrice
        }
      });
      // Limit expedia results to 20.
      PossibleExpedia.bulkCreate(data);
    });
};

module.exports = activityController;
