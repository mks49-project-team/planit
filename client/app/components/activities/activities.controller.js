(function() {
 'use strict';

 angular
    .module('app.activityList')
    .controller('ActivityController', ActivityController);

  ActivityController.$inject = ['$scope', '$state', 'activityService', '$location', 'UserAuthService', 'searchService'];

  function ActivityController($scope, $state, activityService, $location, UserAuthService, searchService) {
    var vm = this;
    vm.possibleActivities = [];
    vm.possibleExpedia = [];
    vm.getActivities = getActivities;
    vm.getSelectedActivity = getSelectedActivity;
    vm.getExpedia = getExpedia;
    vm.getSelectedExpediaActivity = getSelectedExpediaActivity;
    vm.uuid;
    vm.trip_id;
    vm.loadingPage = searchService.loadingPage;
    vm.loadingStatus = 0;
    vm.renderLoadPage = renderLoadPage;
    vm.res;

    function renderLoadPage() {
        var time;
        var res;
        var timeInsert;
        console.log(vm.loadingPage, 'loaddatpage');
        vm.loadingStatus = vm.loadingStatus + 20;
        time = vm.loadingStatus;
        timeInsert = time + '%'
        vm.res = {"width":timeInsert}
        console.log(vm.res, 'this should happen like 4-5 times *****')
        return vm.res;
      }
    var y = setInterval(vm.renderLoadPage, 1000)
      // if (vm.loadingPage === true) {
      //   for(var i = 0; i < 5; i++) {
      //     time = vm.loadingStatus + 20;
      //     timeInsert = time + '%'
      //     res = {"width":timeInsert}
      //     console.log(res, 'disdares');
      //     return setTimeout({
      //       time
      //     }, 1000)
          
      //   }
      // }
      setTimeout(function(){
        vm.loadingPage = false;
        console.log(vm.loadingPage, 'should be false baby babaaaa')
        clearInterval(y);
      }, 5500)
      
    // }

    /* *
    * ActivityController listens for a change in ParentController's uuid value
    * and gets the possible activities from /api/activity and /api/activity/expedia for the trip with that uuid.
    *
    * It also sets selectedActivity and selectedExpediaActivity of the ParentController on user-click
    * in getSelectedActivity().
    * */

    if (localStorage.getItem('id') === null) {
        UserAuthService.fromShared = $location.url();
        console.log(UserAuthService.fromShared, 'this should be the uuid with trip')
        console.log($location.url(UserAuthService.fromShared).$$search.uuid, 'poo')
        $location.path('/signup')
    } else {
      $scope.$on('uuidChange', function(event, args) {

      console.log(args, 'lalalala')
      console.log(event, 'this is event')
      vm.uuid = args.val;
      vm.getActivities(args.val);
      vm.getExpedia(args.val);
      console.log(vm.getExpedia, 'uiop');
      console.log(vm.uuid, 'poiu')
      });
    }

    function getActivities(uuid) {
      return activityService.getActivities(uuid)
        .then(function(data) {

          console.log('getActivities12', data, 'getActivities12')
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
      console.log('llllll', activity, 'llllll')
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
      console.log('eeeeee', activity, 'eeeeee')
      vm.getExpedia(vm.uuid);
    }

    /* *
    * There is a setTimeout here because we need to retrieve the uuid value
    * before getting a trip's possible activities.
    * */
``
    setTimeout(function() {
      console.log(vm.uuid, 'WHAT THE FUCK IS THIS THIS BETTER BE TRIP ID DAMNIT *****')
      //if (UserAuthService.fromExplored === true) {
      //console.log('USING TIMEOUT BABY')
      vm.getActivities(vm.uuid);
      vm.getExpedia(vm.uuid);
      //}
    }, 5000);
    
  }
})();
