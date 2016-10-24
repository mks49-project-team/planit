var PossibleExpedia = require('../db').PossibleExpedia;

var expediaController = {};

expediaController.GET = function(req, res) {
  PossibleExpedia
    .findAll({
      where: { uuid: req.query.uuid }
    })
    .then(function(expediaActivity) {
      res.status(200).send(expediaActivity);
    })
    .catch(function(err) {
      console.log('Error in retrieving activities: ', err);
      res.status(418).send(err);
    });
};

module.exports = {
  expediaController: expediaController
};
