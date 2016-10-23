(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('auth', {
        url: '/auth',
        templateUrl: './app/common/auth/auth.html',
        controller: 'AuthController as vm'
      });
  }
})();
