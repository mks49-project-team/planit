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

    ///////////////

    function getHash() {
      return $http({
        method: 'GET',
        url: '/api/auth'
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
    }
  }
})();
