/* *
* The main app module contains ParentController.
* */

(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.auth',
      'app.search',
      'app.activityList',
      'app.expedia',
      'app.itinerary'
    ]);
})();
