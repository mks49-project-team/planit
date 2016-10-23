(function() {
 'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$scope', '$state', 'authService'];

  function AuthController($scope, $state, authService) {
    var vm = this;
    vm.getHash = getHash;

    /* *
    * All information for a trip is tied to a Universally Unique Identifier (UUID) or hash.
    *
    * getHash() is initialized with ng-init in the auth.html template. getHash():
    *   - retrieves the hash created when a search is submitted in SearchController
    *   - sets the uuid of the ParentController
    *   - changes the window location href
    * */

    function getHash() {
      return authService.getHash()
        .then(function(hash) {
          $scope.$parent.uuid = hash;
          if (!window.location.href.includes('uuid')) {
            window.location.replace(window.location.href + '?uuid=' + hash);
          }
          return hash;
        })
        .catch(function(err) {
          console.log('err in AuthController getHash', err);
        });
    }
  }
})();
