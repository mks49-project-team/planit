var express = require('express');
var usersController = require('../controllers').usersController;

var usersRouter = express.Router();

usersRouter.get('/', usersController.GET);
usersRouter.post('/', usersController.POST);

module.exports = usersRouter;
