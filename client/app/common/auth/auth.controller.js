(function() {
 'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$scope', '$state', 'authService'];

  function AuthController($scope, $state, authService) {
    var vm = this;
    vm.getHash = getHash;
    vm.windowLocation = window.location.href;
    vm.modalHash = vm.windowLocation;

    /* *
    * All information for a trip is tied to a Universally Unique Identifier (UUID) or hash.
    *
    * getHash() is initialized with ng-init in the auth.html template. getHash():
    *   - retrieves the hash created when a search is submitted in SearchController
    *   - sets the uuid of the ParentController
    *   - changes the window location href
    * */

    function getHash() {
      console.log('hashing baby')
      return authService.getHash()
        .then(function(hash) {
          console.log(hash, "greenhash")
          $scope.$parent.uuid = hash;
          if (!window.location.href.includes('uuid')) {
            vm.windowLocation = window.location.href + '?uuid=' + hash;
            window.location.replace(vm.windowLocation);
          }
          vm.modalHash = vm.windowLocation;
        })
        .catch(function(err) {
          console.log('err in AuthController getHash', err);
        });
    }
  }
})();
