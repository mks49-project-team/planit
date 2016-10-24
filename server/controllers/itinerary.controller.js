var SavedActivities = require('../db').SavedActivities;
var PossibleActivities = require('../db').PossibleActivities;
var SavedExpedia = require('../db').SavedExpedia;
var PossibleExpedia = require('../db').PossibleExpedia;

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
  })
  .catch(function(err) {
    console.log('err in saving selected activity', err);
    res.status(204).send(err);
  });
};

itineraryController.GETEXPEDIA = function(req, res) {
  SavedExpedia.findAll({
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

itineraryController.POSTEXPEDIA = function(req, res) {
  SavedExpedia.create({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    recommendationScore: req.body.recommendationScore,
    fromPrice: req.body.fromPrice,
    uuid: req.body.uuid
  })
  .then(function(activity) {
    PossibleExpedia.destroy({
      where: {
        title: activity.title
      }
    })
    .then(function(numDeleted) {
      res.status(201).json(numDeleted);
    })
    .catch(function(err) {
      console.log('err in deleting selected activity', err);
      res.status(204).send(err);
    });
  })
  .catch(function(err) {
    console.log('err in saving selected activity', err);
    res.status(204).send(err);
  });
};

module.exports = {
  itineraryController: itineraryController
};
