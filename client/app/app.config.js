(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('trip', {
        url: '/trip',
        views: {
          '': { templateUrl: '../trip.html' },
          'activity@trip': {
            templateUrl: './app/components/activities/activities.html',
            controller: 'ActivityController as vm'
          },
          'itinerary@trip' : {
            templateUrl: './app/components/itinerary/itinerary.html',
            controller: 'ItineraryController as vm'
          }
        }
      });
  }
})();
