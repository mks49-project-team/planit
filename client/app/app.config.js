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
        url: '/',
        templateUrl: '../trip.html',
        controller: 'ParentController as parent'
      })
      .state('parent.trip', {
        url: 'trip',
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
          },
          'auth': {
            templateUrl: './app/common/auth/auth.html',
            controller: 'AuthController as vm',
            parent: 'parent'
          }
        }
      })
      // .state('parent.search', {
      //   url: 'explore',
      //   templateUrl: './app/common/search/search.html',
      //   controller: 'SearchController as vm',
      //   parent: 'parent'
      // })
  }
})();
