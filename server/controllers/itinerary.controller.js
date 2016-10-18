var SavedActivities = require('../db').SavedActivities;

var itineraryController = {};

itineraryController.GET = function(req, res) {
  console.log('inside itineraryController.GET');
  res.status(200).send();
};

itineraryController.POST = function(req, res) {
  console.log('inside itineraryController.POST');
  SavedActivities.sync().then(function() {
    return SavedActivities.create({
      name: 'testname',
      picture: 'testpic',
      description: 'testdesc',
      address: 'testaddress'
    });
  });
  res.status(201).send();
};

module.exports = {
  itineraryController: itineraryController
};
