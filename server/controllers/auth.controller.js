var Trip = require('../db').Trip;
var authController = {};

authController.GET = function(req, res) {
  console.log('inside the auth controller.GET');
  Trip.findAll({})
    .then(function(hash) {
      res.status(200).json(hash);
    })
    .catch(function(err) {
      console.log('Error in retrieving activities: ', err)
      res.status(418).send(err);
    });
};


module.exports = {
  authController: authController
};
