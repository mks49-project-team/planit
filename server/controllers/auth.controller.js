var Trip = require('../db').Trip;
var activityController = require('./activity.controller').activityController;

var authController = {};

authController.GET = function(req, res) {
  res.status(200).send(authController.hash);
};

// find trip where hash is matched in DB then post the data to page

authController.GETHASH = function(req, res) {
  Trip.findOne({
    where: {
      uuid: req.params.hash
    }
  })
  .then(function(trip) {
    activityController.POST(trip.dataValues.locationName)
    res.redirect('/#/trip/?uuid='+req.params.hash);
  })
  .catch(function(err) {
    console.log("Invalid hash", err);
    res.status(404).send(err);
  })

};

module.exports = {
  authController: authController
};
