(function() {

 'use strict';

  angular
    .module('app.activityList')
    .controller('ListController', ListController);

  ListController.$inject = ['$state', 'listService'];

  function ListController($state, listService) {
    var vm = this;
    vm.possibleActivities = [];
    vm.getActivities = getActivities;

    function getActivities() {
      return listService.getActivities()
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