var rp = require('request-promise');
var Users = require('../db').Users;

var usersController = {};

usersController.POST = function(req, res) {
	Users.create(req.body)
	res.send(req.body)
}

usersController.GET = function(req, res) {
	Users.find({
		where: {
			username: req.query.username,
			password: req.query.password
		}
	})
	.then(function(data){
		res.send(data)
	})
}

module.exports = usersController;
