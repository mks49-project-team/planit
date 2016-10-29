var Trip = require('../db').Trip;
var activityController = require('./activity.controller');

var authController = {};

/* *
 * Ask Jongsoo and Oliver
 * */
authController.GET = function(req, res) {
  res.status(200).send(authController.hash);
};

/* *
* Get the correct possible and saved activities when a user directly navigates
* to the trip view by using the shareable link.
* */
authController.GETHASH = function(req, res) {
  Trip.findOne({
    where: {
      uuid: req.params.hash
    }
  })
  .then(function(trip) {
    // refactor?? currently re-queries and saves yelp results to database
    activityController.POST(trip.dataValues.locationName);
    res.redirect('/#/trip/?uuid=' + req.params.hash);
  })
  .catch(function(err) {
    res.status(404).send(err);
  });
};

module.exports = authController;
