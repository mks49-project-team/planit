var PossibleActivities = require('../db').PossibleActivities;
var yelpSearch = require('../helpers/activityHelper').yelpSearch;
var activityController = {};

activityController.GET = function(req, res) {
  // console.log('inside the activity controller.GET');
  PossibleActivities.findAll({})
    .then(function(activity) {
      res.status(200).json(activity);
    })
    .catch(function(err) {
      console.log('Error in retrieving activities: ', err)
      res.status(418).send(err);
    });
};

activityController.POST = function(req, res) {
  // console.log('inside the activity controller.POST');
  // make API request to Yelp
  console.log('req in activityController', req);
  yelpSearch(req.locationName)
    .then(function(searchResults) {
      //saves search results to the database;
      searchResults.forEach(function(searchResult) {
        console.log(searchResult['tripId']);
        searchResult['uuid'] = req.uuid;
      });
      console.log(searchResults, 'searchResults');
      PossibleActivities.bulkCreate(searchResults);
    })
    .then(function(savedActivities) {
      console.log('things have been saved i guess');
      res.status(200).json(savedActivities);
    })
    .catch(function(err) {
      console.log('Error in posting possible activities: ', err)
      res.status(418).send(err);
    });

};

module.exports = {
  activityController: activityController
};
