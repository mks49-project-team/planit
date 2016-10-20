(function() {

 'use strict';

  angular
    .module('app.activityList')
    .controller('ActivityController', ActivityController);

  ActivityController.$inject = ['$state', 'activityService'];

  function ActivityController($state, activityService) {
    var vm = this;
    vm.possibleActivities = [];
    vm.getActivities = getActivities;
    vm.getActivities();
    function getActivities() {

      return activityService.getActivities()

        .then(function(data) {
          data.forEach(function(entry){
            var splitz = entry.address.split('')
            for(var i = 0; i < splitz.length; i++){
              var temp = "";
              if (splitz[i] === '"' || splitz[i] === '{' || splitz[i] === '}'){
                splitz[i] = temp;
              }
              else if(splitz[i] === ','){
                splitz[i] += ' ';
              }
            }
            splitz = splitz.join('');
            entry.address = splitz;
          })
          // console.log("good god please work", data[0].address)
          vm.possibleActivities = data;
        })
        .catch(function(err) {
          console.log("There was an error: ", err);
          return err;
        });
    }
  }

})();