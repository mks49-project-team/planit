var Sequelize = require('sequelize');

module.exports = function(db) {
  var PossibleExpedia = db.define('possibleExpedia', {
    title: { type: Sequelize.STRING },
    imageUrl: { type: Sequelize.STRING },
    recommendationScore: { type: Sequelize.STRING },
    fromPrice: { type: Sequelize.STRING },
    uuid: { type: Sequelize.STRING }
  });

  return PossibleExpedia;
};
