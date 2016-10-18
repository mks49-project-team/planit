(function() {
  'use strict';

  angular
    .module('app.itinerary')
    .controller('ItineraryController');

  ItineraryController.$inject = ['$state', 'itineraryService'];

  function ItineraryController($state, itineraryService) {
    var vm = this;
  }
})();
