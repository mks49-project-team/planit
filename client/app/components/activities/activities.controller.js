(function() {

 'use strict';

  angular
    .module('app.activityList')
    .controller('ActivityController', ActivityController);

  ActivityController.$inject = ['$state', 'activityService'];

  function ActivityController($state, listService) {
    var vm = this;
    vm.possibleActivities = [];
    vm.getActivities = getActivities;

    function getActivities() {

      return activityService.getActivities()

        .then(function(data) {
          vm.possibleActivities = data;
        })
        .catch(function(err) {
          console.log("There was an error: ", err);
          return err;
        });
    }
  }

})();