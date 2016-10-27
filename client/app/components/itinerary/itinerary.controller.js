(function() {
  'use strict';

  angular
    .module('app.itinerary')
    .controller('ItineraryController', ItineraryController);

  ItineraryController.$inject = ['$scope', '$state', 'itineraryService'];

  function ItineraryController($scope, $state, itineraryService) {
    var vm = this;
    vm.savedActivities = [];
    vm.savedExpediaActivities = [];
    vm.getSavedActivities = getSavedActivities;
    vm.postSavedActivity = postSavedActivity;
    vm.getSavedExpediaActivities = getSavedExpediaActivities;
    vm.postSavedExpediaActivity = postSavedExpediaActivity;
    vm.uuid;

    /* *
    * ItineraryController
    *   - listens for a change in ParentController's uuid and selectedActivity values
    *   - gets the saved activities from /api/itinerary and /api/itinerary/expedia for the trip with that uuid
    *   - deletes the selectedActivity from possibleActivities and possibleExpedia tables
    * */

    $scope.$on('uuidChange', function(event, args) {
      vm.uuid = args.val;
      vm.getSavedActivities(args.val);
    });

    $scope.$on('selectedActivityChange', function(event, args) {
      vm.postSavedActivity(args.val);
      vm.getSavedActivities(vm.uuid);
    });

    $scope.$on('selectedExpediaActivityChange', function(event, args) {
      vm.postSavedExpediaActivity(args.val);
      vm.getSavedExpediaActivities(vm.uuid);
    });

    function getSavedActivities(uuid) {
      return itineraryService.getSavedActivities(uuid)
        .then(function(data) {
          vm.savedActivities = data;
        })
        .catch(function(err) {
          console.log('err in getSavedActivities', err);
        });
    }

    function postSavedActivity(activity) {
      return itineraryService.postSavedActivity(activity)
        .then(function(data) {
        })
        .catch(function(err) {
          console.log('err in postSavedActivity', err);
        });
    }

    function getSavedExpediaActivities(uuid) {
      return itineraryService.getSavedExpediaActivities(uuid)
        .then(function(data) {
          vm.savedExpediaActivities = data;
        })
        .catch(function(err) {
          console.log('err in getSavedActivities', err);
        });
    }

    function postSavedExpediaActivity(activity) {
      return itineraryService.postSavedExpediaActivity(activity)
        .then(function(data) {
        })
        .catch(function(err) {
          console.log('err in postSavedActivity', err);
        });
    }

    /* *
    * There is a setTimeout here because we need to retrieve the uuid value
    * before getting a trip's saved activities.
    * */
    // waiting for auth controller to get uuid (getHash)
    setTimeout(function() {
      vm.getSavedActivities(vm.uuid);
      vm.getSavedExpediaActivities(vm.uuid);
    }, 1500);
  }
})();
