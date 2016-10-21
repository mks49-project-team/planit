var Trip = require('../db').Trip;
var activityController = require('./activity.controller').activityController;
var authController = {};

authController.hash = null;

authController.GET = function(req, res) {
  console.log('inside the auth controller.GET', authController.hash);
  res.status(200).send(authController.hash);
};

authController.GETHASH = function(req, res) {
  console.log("getting from hash link, this is req.params", req.params)
  Trip.findOne({
    where: {
      uuid: req.params.hash
    }
  })
  .then(function(trip) {
    console.log("This is trip!", trip)
    activityController.POST(trip.dataValues.locationName)
    res.redirect('/');
  })
  .catch(function(err) {
    console.log("Invalid hash")
    res.status(404).send(err)
  })

}



module.exports = {
  authController: authController
};
