var express = require('express');
var searchController = require('../controllers').searchController;

var searchRouter = express.Router();

// searchRouter.get('/', searchController.GET);
searchRouter.post('/', searchController.POST);

module.exports = {
  searchRouter: searchRouter
};
