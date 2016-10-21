(function() {

 'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$scope', '$state', 'authService'];

  function AuthController($scope, $state, authService) {
    var vm = this;
    vm.windowLoation = null;
    vm.getHash = getHash;
    
    console.log('authController scope', $scope);
    function getHash() {
      console.log("You clicked me!")
      return authService.getHash()
        .then(function(data) {
          console.log("this is data", data)
          vm.windowLocation = data.data
          window.location.replace(window.location.href + "/" + vm.windowLocation);
          return data.data;
        })
        .then(function(hash) {
          vm.uuid = hash;
          $scope.$parent.uuid = hash;
          console.log('vm.uuid', $scope.parent, $scope.$parent.uuid );
        })
        .catch(function(err) {
          console.log('err in auth', err)
        })
    }
  }

})();
