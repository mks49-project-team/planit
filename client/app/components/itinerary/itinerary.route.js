(function() {
  'use strict';

  angular
    .module('app.itinerary')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('itinerary', {
        url: '/trip',
        templateUrl: './app/components/itinerary/itinerary.html',
        controller: 'ItineraryController as vm'
      });
  }
})();
