(function() {
  'use strict';

  angular
    .module('app.itinerary')
    .controller('ItineraryController', ItineraryController);

  ItineraryController.$inject = ['$scope', '$state', 'itineraryService'];

  function ItineraryController($scope, $state, itineraryService) {
    var vm = this;
    vm.savedActivities = [];
    vm.getSavedActivities = getSavedActivities;
    vm.postSavedActivity = postSavedActivity;
    vm.deleteSelectedActivity = deleteSelectedActivity;

    function getSavedActivities() {
      return itineraryService.getSavedActivities()
        .then(function(data) {
          vm.savedActivities = data;
          console.log('got savedActivities', data);
        })
        .catch(function(err) {
          console.log('err in getSavedActivities', err);
        });
    }

    function postSavedActivity(activity) {
      return itineraryService.postSavedActivity(activity)
        .then(function(data) {
          console.log('saved activity', data);
        })
        .catch(function(err) {
          console.log('err in postSavedActivity', err);
        });
    }

    function deleteSelectedActivity(activity) {
      return itineraryService.deleteSelectedActivity(activity)
        .then(function(data) {
          console.log('deleted activity', data);
        })
        .catch(function(err) {
          console.log('err in deleteSelectedActivity', err);
        });
    }

    function init() {
      console.log('inside itineraryController init');
      vm.getSavedActivities();
    }

    init();
  }
})();
