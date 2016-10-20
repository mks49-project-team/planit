var express = require('express');
var authController = require('../controllers').authController;

var authRouter = express.Router();

authRouter.get('/', authController.GET);
authRouter.post('/', authController.POST);

module.exports = {
  authRouter: authRouter
}
