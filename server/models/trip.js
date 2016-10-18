var Sequelize = require('sequelize');

module.exports = function(db) {
  var Trip = db.define('trip', {
    uuid: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    locationName: {type: Sequelize.STRING}
  });

  return Trip;
};
