(function() {
 'use strict';

 angular
    .module('app.activityList')
    .controller('ActivityController', ActivityController);

  ActivityController.$inject = ['$scope', '$state', 'activityService'];

  function ActivityController($scope, $state, activityService) {
    var vm = this;
    vm.possibleActivities = [];
    vm.possibleExpedia = [];
    vm.getActivities = getActivities;
    vm.getSelectedActivity = getSelectedActivity;
    vm.getExpedia = getExpedia;
    vm.getSelectedExpediaActivity = getSelectedExpediaActivity;
    vm.uuid;

    /* *
    * ActivityController listens for a change in ParentController's uuid value
    * and gets the possible activities from /api/activity and /api/activity/expedia for the trip with that uuid.
    *
    * It also sets selectedActivity and selectedExpediaActivity of the ParentController on user-click
    * in getSelectedActivity().
    * */

    $scope.$on('uuidChange', function(event, args) {
      console.log(args, 'lalalala')
      console.log(event, 'this is event')
      
      vm.uuid = args.val;
      vm.getActivities(args.val);
      vm.getExpedia(args.val);
    });

    function getActivities(uuid) {
      return activityService.getActivities(uuid)
        .then(function(data) {

          // format the address of each location for display
          data.forEach(function(entry) {
            var splitz = entry.address.split('');
            for (var i = 0; i < splitz.length; i++) {
              var temp = '';
              if (splitz[i] === '"' || splitz[i] === '{' || splitz[i] === '}') {
                splitz[i] = temp;
              } else if (splitz[i] === ',') {
                splitz[i] += ' ';
              }
            }
            splitz = splitz.join('');
            entry.address = splitz;
          });
          vm.possibleActivities = data;
        })
        .catch(function(err) {
          console.log('There was an error in getActivities: ', err);
        });
    }

    function getSelectedActivity(activity) {
      $scope.$parent.selectedActivity = activity;
      vm.getActivities(vm.uuid);
    }

    function getExpedia(uuid) {
        console.log('getexpedia UUUID', uuid, 'getexpedia UUUUID')
      return activityService.getExpedia(uuid)
        .then(function(data) {
          console.log('getExpedia12', data, 'getExpedia123')
          vm.possibleExpedia = data;
        })
        .catch(function(err) {
          console.log('err in getExpedia', err);
        });
    }

    function getSelectedExpediaActivity(activity) {
      $scope.$parent.selectedExpediaActivity = activity;
      vm.getExpedia(vm.uuid);
    }

    /* *
    * There is a setTimeout here because we need to retrieve the uuid value
    * before getting a trip's possible activities.
    * */

    setTimeout(function() {
      vm.getActivities(vm.uuid);
      vm.getExpedia(vm.uuid);
    }, 2000);
  }
})();
