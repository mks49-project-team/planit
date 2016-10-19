(function() {

 'use strict';

  angular
    .module('app.auth')
    .controller('authController')

  .$inject = ['$state', 'authService'];

  function AuthController($state, authService) {
    var vm = this;
  }

})();
