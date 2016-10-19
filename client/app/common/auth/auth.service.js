var crypto = require('crypto');
(function() {
  'use strict';

  angular
    .module(app.auth)
    .factory('appService', appService);

  authService.$inject = ['$http'];

  function authService($http) {

  }


})

var createEndpoint = function() {
  crypto.randomBytes(10, function(error, buf) {
    if(err) {
      console.error(err)
    } else {
      console.log("This is the crypto", buf)
    }
  })
}
