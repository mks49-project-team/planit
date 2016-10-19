var PossibleActivities = require('../db').PossibleActivities;
var yelpSearch = require('../helpers/activityHelper').yelpSearch
var activityController = {};

activityController.GET = function(req, res) {
  console.log('inside the activity controller.GET');
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
  // make API request to Yelp
  yelpSearch('Seattle')
  .then(function(searchResults) {
    console.log("this is a search result", searchResults)
    PossibleActivities.bulkCreate({
        name: 'name',
        rating: 'rating',
        stars: 'some stows',
        picture: 'image',
        description: 'description',
        address: 'address'
    });

    res.status(200).json(searchResults);
  })
  .catch(function(err) {
    console.log('Error in posting possible activities: ', err)
    res.status(418).send(err);
  });

};

module.exports = {
  activityController: activityController
};