var Sequelize = require('sequelize');

module.exports = function(db) {
  var SavedExpedia = db.define('savedExpedia', {
    title: { type: Sequelize.STRING },
    imageUrl: { type: Sequelize.STRING },
    recommendationScore: { type: Sequelize.STRING },
    fromPrice: { type: Sequelize.STRING }
  });

  return SavedExpedia;
};
