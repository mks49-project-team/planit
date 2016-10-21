var Sequelize = require('sequelize');

module.exports = function(db) {
  var SavedActivities = db.define('savedActivities', {
    name: {type: Sequelize.STRING},
    rating:{type: Sequelize.STRING},
    stars:{type: Sequelize.STRING},
    picture: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    address: {type: Sequelize.STRING},
    uuid: {type: Sequelize.STRING}
  });

  return SavedActivities;
};
