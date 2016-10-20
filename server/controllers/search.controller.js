var Trip = require('../db').Trip;

var searchController = {};

searchController.POST = function(req, res) {
  console.log('inside tripController.POST');
  console.log('THIS IS DATAAAAA', req.body.locationName)
  Trip.create({
    uuid: 'testuuid',
    password: 'testpw',
    locationName: req.body.locationName
  })
  .then(function(activity) {
    res.status(201).json(activity);
    console.log(activity.get({
      plain: true
    }));
  })
  .catch(function(err) {
    console.log('err in saving selected activity', err);
    res.status(404).send(err);
  });
};


module.exports = {
  searchController: searchController
};
