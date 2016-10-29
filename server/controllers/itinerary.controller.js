var SavedActivities = require('../db').SavedActivities;
var PossibleActivities = require('../db').PossibleActivities;
var SavedExpedia = require('../db').SavedExpedia;
var PossibleExpedia = require('../db').PossibleExpedia;

var itineraryController = {};

/* *
 * Get all previously found Yelp activities for a specific trip/uuid.
 * */
itineraryController.GET = function(req, res) {
  console.log('bnbnbn', req.query, 'bnbnbn')
  SavedActivities.findAll({
    where: { trip_id: req.query.uuid }
  })
  .then(function(activity) {
    res.status(200).json(activity);
  })
  .catch(function(err) {
    res.status(204).send(err);
  });
};

/* *
 * Save the user-selected Yelp activity to the SavedActivities table and
 * delete it from the table of PossibleActivities for a specific trip/uuid.
 * */
itineraryController.POST = function(req, res) {
  console.log(req.body, 'uuuuuu')
  SavedActivities.create({
    name: req.body.name,
    rating: req.body.rating,
    stars: req.body.stars,
    address: req.body.address,
    image: req.body.image,
    description: req.body.description,
    user_id: req.body.user_id,
    trip_id: req.body.trip_id,
  })
  .then(function(activity) {
    PossibleActivities.destroy({
      where: {
        name: activity.dataValues.name,
        trip_id: activity.dataValues.trip_id
      }
    })
    .then(function(numDeleted) {
      res.status(201).json(numDeleted);
    })
    .catch(function(err) {
      res.status(204).send(err);
    });
  })
  .catch(function(err) {
    res.status(204).send(err);
  });
};

/* *
 * Get all previously found Expedia activities for a specific trip/uuid.
 * */
itineraryController.GETEXPEDIA = function(req, res) {
  SavedExpedia.findAll({
    where: { trip_id: req.query.uuid }
  })
  .then(function(activity) {
    res.status(200).json(activity);
  })
  .catch(function(err) {
    res.status(204).send(err);
  });
};

/* *
 * Save the user-selected Expedia activity to the SavedActivities table and
 * delete it from the table of PossibleActivities for a specific trip/uuid.
 * */
itineraryController.POSTEXPEDIA = function(req, res) {
  console.log('ertyerty', req.body, 'ertyerty')
  SavedExpedia.create({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    recommendationScore: req.body.recommendationScore,
    fromPrice: req.body.fromPrice,
    user_id: req.body.user_id,
    trip_id: req.body.trip_id
  })
  .then(function(activity) {
    console.log('dfghdfgh', activity, 'dfghdfgh')
    PossibleExpedia.destroy({
      where: {
        title: activity.dataValues.title,
        trip_id: activity.dataValues.trip_id
      }
    })
    .then(function(numDeleted) {
      res.status(201).json(numDeleted);
    })
    .catch(function(err) {
      res.status(204).send(err);
    });
  })
  .catch(function(err) {
    res.status(204).send(err);
  });
};

module.exports = itineraryController;
