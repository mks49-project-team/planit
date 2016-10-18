var Sequelize = require('sequelize');

module.exports = function(db) {
  var SavedActivities = db.define('savedActivities', {
    name: {type: Sequelize.STRING},
    picture: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    address: {type: Sequelize.STRING}
  });

  return SavedActivities;
};
