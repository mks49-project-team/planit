var express = require('express');
var activityController = require('../controllers').activityController;

var activityRouter = express.Router();

activityRouter.get('/', activityController.GET);
activityRouter.post('/', activityController.POST);

activityRouter.get('/expedia', activityController.GETEXPEDIA);
activityRouter.post('/expedia', activityController.POSTEXPEDIA);

module.exports = activityRouter;
