/* *
* Main app routes are here and in search.route.js
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
      .state('userauth', {
        url: '/signup',
        templateUrl: './app/common/userAuth/user.auth.html',
        controller: 'UserAuthController as vm',
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
          'chat':{
            templateUrl: './app/components/chat/chat.html',
            controller: 'chatController as vm',
            parent: 'parent'
          },
          'calendar':{
            templateUrl: './app/components/calendar/calendar.html',
            controller: 'CalendarController as vm',
            parent: 'parent'
          },
          'createEventModal':{
            templateUrl: './app/components/createEventModal/createEventModal.html',
            controller: 'CreateEventModalController',
            parent: 'parent'
          }
        }
      });

    $urlRouterProvider.otherwise('explore');
  }
})();
