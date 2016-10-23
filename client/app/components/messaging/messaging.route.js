(function(){
  'use strict';

  angular
    .module('app.messaging');
    .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
      $stateProvider
        .state('messaging', {
          url: '/messaging',
          templateUrl: './app/components/messaging/messaging.html',
          controller: null
        });
    }
})();