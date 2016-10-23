/* *
* Main app routes are here and in search.route.js
* The remaining route files (auth, activities and itinerary) exist for testing.
* */

(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
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
          'itinerary': {
            templateUrl: './app/components/itinerary/itinerary.html',
            controller: 'ItineraryController as vm',
            parent: 'parent'
          },
          'auth': {
            templateUrl: './app/common/auth/auth.html',
            controller: 'AuthController as vm',
            parent: 'parent'
          },
          // 'expedia': {
          //   templateUrl: './app/components/expedia/expedia.html',
          //   controller: 'ExpediaController as vm',
          //   parent: 'parent'
          // },
          // 'messaging': {
          //   templateUrl: './messaging/messaging.html',
          //   parent: 'parent'
          // }
        }
      });

    $urlRouterProvider.otherwise('explore');
  }
})();
