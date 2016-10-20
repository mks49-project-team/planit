// contains the logic of the controller. Exmaple: making the api request to our own server when someone searches
// for a destination.
(function(){
  'use strict';

  angular
    .module('app.search')
    .factory('searchService', searchService);

  searchService.$inject = ['$http'];

  function searchService($http) {
    var service = {
      autoComplete : autoComplete,
      submit: submit
    };

    return service;

    ////////////////////

    function autoComplete() {
      var options = {
        types: ['(cities)']
      };

    var input = document.getElementById('searchTextField');
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    };

    function submit() {
      return $http({
        method: 'POST',
        url: '/search',
      })
    }
  }


})()
