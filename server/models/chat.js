var Sequelize = require('sequelize');

module.exports = function(db) {
  var Chat = db.define('chat', {
    msg: { type: Sequelize.STRING }
  });

  return Chat;
};
