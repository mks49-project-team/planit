var express = require('express');
var itineraryController = require('../controllers').itineraryController;

var itineraryRouter = express.Router();

itineraryRouter.get('/', itineraryController.GET);
itineraryRouter.post('/', itineraryController.POST);

module.exports = {
  itineraryRouter: itineraryRouter
}
