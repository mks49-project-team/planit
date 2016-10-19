var express = require('express');
var activityController = require('../controllers').activityController;

var activityRouter = express.Router();

activityRouter.get('/', activityController.GET);
activityRouter.post('/', activityController.POST);

module.exports = {
  activityRouter: activityRouter
}