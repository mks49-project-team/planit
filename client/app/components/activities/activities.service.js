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
    ////////////////////////

    //function calls for yelp results in database
    function getActivities() {
      return $http({
        method: 'GET',
        url:'/api/activity'
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        console.log('There was an error: ', err);
        return err;
      })
    }
})();