(function() {
  'use strict';

  angular
    .module('app.activityList')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('activity', {
        url: '/activity',
        templateUrl: './app/components/activities/activities.html',
        controller: 'ActivityController as vm'
      });
  }
})();