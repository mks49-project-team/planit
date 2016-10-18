(function() {
  'use strict';

  angular
    .module('app.itinerary')
    .factory('itineraryService', itineraryService);

  itineraryService.$inject = ['$http'];

  function itineraryService($http) {
    var service = {
    };

    return service;

    ///////////////

  }
})();
