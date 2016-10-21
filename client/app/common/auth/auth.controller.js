(function() {

 'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;
    vm.windowLocation = null;
    vm.getHash = getHash

    function getHash() {
      console.log("You clicked me!")
      return authService.getHash()
        .then(function(data) {
          console.log("this is data", data)
          vm.windowLocation = data.data
          window.location.replace(window.location.href + "/planit/" + vm.windowLocation)
        })
        .catch(function(err) {
          console.log('err in auth', err)
        })
    }
  }

})();
