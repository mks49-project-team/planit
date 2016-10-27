var Sequelize = require('sequelize');


module.exports = function(db) {
  var PossibleExpedia = db.define('possibleExpedia', {
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
    title: { type: Sequelize.STRING },
    imageUrl: { type: Sequelize.STRING },
    recommendationScore: { type: Sequelize.STRING },
    fromPrice: { type: Sequelize.STRING }
    // uuid_id: { 
    //   type: Sequelize.INTEGER,
    //   references: {
    //                model: 'trip',
    //                key: 'id',
    //                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //               }

    // }
  });

  return PossibleExpedia;
};
