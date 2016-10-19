(function() {
  'use strict';
  angular
    .module('app.activityList')
    .factory('activityService', activityService);

    activityService.$inject = ['$http'];

    function activityService($http) {
      var service = {
        getActivities: getActivities,
      };
      return service;
    };

    function getActivities() {
      return $http({
        method: 'GET',
        url:'/api/activity'
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log('There was an error: ', err);
      })
    }
})();