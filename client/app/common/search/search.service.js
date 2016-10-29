(function() {
  'use strict';

  angular
    .module('app.search')
    .factory('searchService', searchService);

  searchService.$inject = ['$http'];

  function searchService($http) {
    var service = {
      autoComplete: autoComplete,
      submitSearch: submitSearch,
      loadingPage: loadingPage

    };

    return service;
    var loadingPage = false;
    /////////////// 
    function autoComplete() {
      var options = {
        types: ['(cities)']
      };

      var input = document.getElementById('searchTextField');
      var autocomplete = new google.maps.places.Autocomplete(input, options);
    }

    function submitSearch(locName) {
      service.loadingPage = true; 
      return $http({
        method: 'POST',
        url: '/api/search',
        headers: { 'Content-Type': 'application/json' },
        data: { locationName: locName }
      })
    }
  }
})();
