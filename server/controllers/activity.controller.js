var PossibleActivities = require('../db').PossibleActivities;

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
  console.log('inside activity controller.POST');
  PossibleActivities.sync().then(function() {
    return PossibleActivities.create({
      name: 'name',
      picture: 'image',
      description: 'description',
      address: 'address'
    })
  })
  .then(function(possibleActivity) {
    res.status(200).json(possibleActivity);
  })
  .catch(function(err) {
    console.log('Error in posting possible activities: ', err)
    res.status(418).send(err);
  });

}

module.exports = {
  activityController: activityController
}