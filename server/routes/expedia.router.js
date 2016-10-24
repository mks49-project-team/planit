var express = require('express');
var expediaController = require('../controllers').expediaController;

var expediaRouter = express.Router();

expediaRouter.get('/', expediaController.GET);

module.exports = {
  expediaRouter: expediaRouter
};
