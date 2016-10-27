var Sequelize = require('sequelize');

module.exports = function(db) {
  var Chat = db.define('chat', {
  	// user_id: { 
   //    type: Sequelize.INTEGER,
   //    references: {
   //                 model: 'users',
   //                 key: 'id',
   //                 deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
   //                }

   //  },
    // trip_id: { 
    //   type: Sequelize.INTEGER,
    //   references: {
    //                model: 'trip',
    //                key: 'id',
    //                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    //               }

    // },
    msg: { type: Sequelize.STRING }
  });

  return Chat;
};
