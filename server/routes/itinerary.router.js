var express = require('express');
var itineraryController = require('../controllers').itineraryController;

var itineraryRouter = express.Router();

itineraryRouter.get('/', itineraryController.GET);
itineraryRouter.post('/', itineraryController.POST);

itineraryRouter.get('/expedia', itineraryController.GETEXPEDIA);
itineraryRouter.post('/expedia', itineraryController.POSTEXPEDIA);

module.exports = itineraryRouter;
