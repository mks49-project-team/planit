var SavedActivities = require('../db').SavedActivities;
var PossibleActivities = require('../db').PossibleActivities;

var itineraryController = {};

itineraryController.GET = function(req, res) {
  console.log('inside itineraryController.GET');
  SavedActivities.findAll({
    where: { uuid: req.query.uuid }
  })
  .then(function(activity) {
    res.status(200).json(activity);
  })
  .catch(function(err) {
    console.log('err in getting selected activity', err);
    res.status(204).send(err);
  });
};

itineraryController.POST = function(req, res) {
  console.log('inside itineraryController.POST', req.body);
  SavedActivities.create({
    name: req.body.name,
    rating: req.body.rating,
    stars: req.body.stars,
    address: req.body.address,
    image: req.body.image,
    description: req.body.description,
    uuid: req.body.uuid
  })
  .then(function(activity) {
    PossibleActivities.destroy({
      where: {
        name: activity.name
      }
    })
    .then(function(numDeleted) {
      res.status(201).json(numDeleted);
    })
    .catch(function(err) {
      console.log('err in deleting selected activity', err);
      res.status(204).send(err);
    });
    // res.status(201).json(activity);
    // console.log(activity.get({
    //   plain: true
    // }));
  })
  .catch(function(err) {
    console.log('err in saving selected activity', err);
    res.status(204).send(err);
  });
};

///// CHANGE THIS TO PossibleActivities /////
itineraryController.DELETE = function(req, res) {
  console.log('inside itineraryController.DELETE');
  // SavedActivities.destroy({
  //   where: {
  //     name: 'testname'
  //   }
  // })
  // .then(function(numDeleted) {
  //   res.status(201).json(numDeleted);
  // })
  // .catch(function(err) {
  //   console.log('err in deleting selected activity', err);
  //   res.status(204).send(err);
  // });
}

module.exports = {
  itineraryController: itineraryController
};
