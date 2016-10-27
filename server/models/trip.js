var Sequelize = require('sequelize');
var randomstring = require('randomstring');

module.exports = function(db) {
  var Trip = db.define('trip', {
    uuid: { type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1
          // type: Sequelize.UUID,
          //   defaultValue: Sequelize.UUIDV1 
          },
    password: { type: Sequelize.STRING },
    locationName: { type: Sequelize.STRING }
  });

  // Create random string as endpoint.
  // Trip.hook('beforeValidate', function(trip, options) {
  //   trip.uuid = randomstring.generate(10);
  // });

  return Trip;
};
