(function() {
  'use strict';

  angular
    .module('app.search')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: './app/common/search/search.html',
        controller: 'SearchController as vm'
      });
  }
})();
