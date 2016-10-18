//var savedActivitiesModel = require('../models').savedActivitiesModel;

var itineraryController = {};

itineraryController.GET = function(req, res) {
  console.log('inside itineraryController.GET');
  res.status(200).send();
};

itineraryController.POST = function(req, res) {
  console.log('inside itineraryController.POST');
  res.status(200).send();
};

module.exports = {
  itineraryController: itineraryController
};
