var express = require('express');
var chatsController = require('../controllers').chatsController;

var chatsRouter = express.Router();

chatsRouter.get('/:room', chatsController.GETCHATS);

module.exports = chatsRouter;
