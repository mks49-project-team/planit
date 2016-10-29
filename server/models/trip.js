var Sequelize = require('sequelize');
var randomstring = require('randomstring');

module.exports = function(db) {
  var Trip = db.define('trip', {
    uuid: { type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1
          },
    password: { type: Sequelize.STRING },
    locationName: { type: Sequelize.STRING }
  });

  return Trip;
};
