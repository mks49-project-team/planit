(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

  authService.$inject = ['$http'];

  function authService($http) {
    var service = {
      getHash: getHash
    };
    return service;

    function getHash() {
      return $http({
        method: 'GET',
        url: '/api/auth'
      })
      .then(function(res) {
        console.log("this is res from auth.service", res.data)
        return res.data;
      })
      .catch(function(err) {
        console.log("Error in auth.service", err)
        return err;
      });
    }
  }
})()
