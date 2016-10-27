var Sequelize = require('sequelize');

module.exports = function(db) {
  var Users = db.define('users', {
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    token: { type: Sequelize.STRING }
  });

  return Users;
};
