var Sequelize = require('sequelize');

module.exports = function(db) {
  var PossibleActivities = db.define('possibleActivities', {
    name: {type: Sequelize.STRING},
    rating:{type: Sequelize.STRING},
    stars:{type: Sequelize.STRING},
    picture: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    address: {type: Sequelize.STRING}
  });

  return PossibleActivities;
};
