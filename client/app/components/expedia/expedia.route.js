(function() {
  'use strict';

  angular
    .module('app.expedia')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('expedia', {
        url: '/expedia',
        templateUrl: './app/components/expedia/expedia.html',
        controller: 'ExpediaController as vm'
      });
  }
})();
