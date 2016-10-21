(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('parent', {
        abstract: true,
        url: '/trip',
        templateUrl: '../trip.html',
        controller: 'ParentController as parent'
      })
      .state('parent.trip', {
        views: {
          'activity': {
            templateUrl: './app/components/activities/activities.html',
            controller: 'ActivityController as vm',
            parent: 'parent'
          },
          'itinerary' : {
            templateUrl: './app/components/itinerary/itinerary.html',
            controller: 'ItineraryController as vm',
            parent: 'parent'
          }
        }
      });
  }
})();
