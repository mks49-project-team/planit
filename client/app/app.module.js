/* *
* The main app module contains ParentController.
* ParentController has children app.auth, app.activityList and app.itinerary.
* app.search is solo.
* */

(function() {
  'use strict';

  angular
    .module('app', [
      'app.calendar',
      'ui.calendar',
      'ui.router',
      'ui.bootstrap',
      'angularModalService',
      'app.auth',
      'app.search',
      'app.activityList',
      'app.itinerary',
      'app.chat',
      'ngAnimate',
      'app.userAuth'
    ]);
})();
