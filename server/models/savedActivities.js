var Sequelize = require('sequelize');


module.exports = function(db) {
  var SavedActivities = db.define('savedActivities', {
    // user_id: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //               model: 'users',
    //               key: 'id',
    //               deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // },
    // trip_id: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //               model: 'trip',
    //               key: 'id',
    //               deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //   }
    // },
    name: { type: Sequelize.STRING },
    rating: { type: Sequelize.STRING },
    stars: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING }
    // uuid_id: { 
    //   type: Sequelize.INTEGER,
    //   references: {
    //                model: 'trip',
    //                key: 'uid',
    //                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //               }

    // }
  });

  return SavedActivities;
};
