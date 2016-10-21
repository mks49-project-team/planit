var express = require('express');
var authController = require('../controllers').authController;

var authRouter = express.Router();

authRouter.get('/planit/:hash', authController.GETHASH)
authRouter.get('/', authController.GET);

module.exports = {
  authRouter: authRouter
}
