var Trip = require('../db').Trip;
var authController = {};

authController.hash = null;

authController.GET = function(req, res) {
  console.log('inside the auth controller.GET', authController.hash);
  res.status(200).send(authController.hash);
};



module.exports = {
  authController: authController
};
