(function() {
  'use strict';

  angular
    .module('app.itinerary')
    .factory('itineraryService', itineraryService);

  itineraryService.$inject = ['$http'];

  function itineraryService($http) {
    var service = {
      getSavedActivities: getSavedActivities,
      postSavedActivity: postSavedActivity,
      deleteSelectedActivity: deleteSelectedActivity,
      getSavedExpediaActivities: getSavedExpediaActivities,
      postSavedExpediaActivity: postSavedExpediaActivity,
      deleteSelectedExpediaActivity: deleteSelectedExpediaActivity
    };

    return service;

    ///////////////

    // populate the itinerary section with previously selected activities
    function getSavedActivities(uuid) {
      return $http({
        method: 'GET',
        url: '/api/itinerary',
        params: { uuid: uuid }
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
    }

    // add selected activity to saved activities
    function postSavedActivity(activity) {
      console.log('activity in itinearry service postSavedActivity', activity);
      return $http({
        method: 'POST',
        url: '/api/itinerary',
        data: activity
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
    }

    // delete selected activity from possible activities
    function deleteSelectedActivity(activity) {
      return $http({
        method: 'DELETE',
        url: '/api/itinerary',
        data: activity
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
    }

    function getSavedExpediaActivities(uuid) {
      return $http({
        method: 'GET',
        url: '/api/itinerary-expedia',
        params: { uuid: uuid }
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
    }

    function postSavedExpediaActivity(activity) {
      console.log('activity in itinearry service postSavedActivity', activity);
      return $http({
        method: 'POST',
        url: '/api/itinerary-expedia',
        data: activity
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
    }

    function deleteSelectedExpediaActivity(activity) {
      return $http({
        method: 'DELETE',
        url: '/api/itinerary-expedia',
        data: activity
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
    }
  }
})();
