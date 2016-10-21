var Trip = require('../db').Trip;
var authController = {};

authController.hash = null;

authController.GET = function(req, res) {
  console.log('inside the auth controller.GET', authController.hash);
  res.status(200).send(authController.hash);
};

authController.GETHASH = function(req, res) {
  console.log("getting from hash link")
  res.status(200).send(req.params)
}



module.exports = {
  authController: authController
};
