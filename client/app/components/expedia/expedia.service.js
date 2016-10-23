(function() {
  'use strict';

  angular
    .module('app.expedia')
    .factory('expediaService', expediaService);

    expediaService.$inject = ['$http'];

    function expediaService($http) {
      var service = {
        getExpedia: getExpedia
      };

      return service;

      ///////////////

      function getExpedia(uuid) {
        return $http({
          method: 'GET',
          url: '/api/expedia',
          params: { uuid: uuid }
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
