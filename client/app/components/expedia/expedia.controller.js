(function() {
 'use strict';

 angular
    .module('app.expedia')
    .controller('ExpediaController', ExpediaController);

  ExpediaController.$inject = ['$scope', '$state', 'expediaService'];

  function ExpediaController($scope, $state, expediaService) {
    var vm = this;
    vm.possibleExpedia = [];
    vm.getExpedia = getExpedia;
    vm.getSelectedExpediaActivity = getSelectedExpediaActivity;
    vm.uuid;

    $scope.$on('uuidChange', function(event, args) {
      vm.uuid = args.val;
      vm.getExpedia(args.val);
    });

    function getExpedia(uuid) {
      return expediaService.getExpedia(uuid)
        .then(function(data) {
          vm.possibleExpedia = data
        })
        .catch(function(err) {
          console.log('err in getExpedia', err);
        });
    }

    function getSelectedExpediaActivity(activity) {
      console.log('clicked on expedia activity', activity);
      $scope.$parent.selectedExpediaActivity = activity;
      vm.getExpedia(vm.uuid);
    }

    /* *
    * There is a setTimeout here because we need to retrieve the uuid value
    * before getting a trip's possible activities.
    * */

    setTimeout(function() {
      vm.getExpedia(vm.uuid);
    }, 1500);
  }
})();
