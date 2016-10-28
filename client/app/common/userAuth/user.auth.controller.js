(function() {
  'use strict';

  angular
    .module('app.userAuth')
    .controller('UserAuthController', UserAuthController);

  UserAuthController.$inject = ['$location', 'UserAuthService'];

  function UserAuthController($location, UserAuthService) {
    var vm = this;
    vm.username;
    vm.password;
    vm.email;
    vm.user;
    vm.pass;
    vm.grabSignupUserData = grabSignupUserData;
    vm.grabLoginUserData = grabLoginUserData;

    function grabSignupUserData(){
      console.log('it works?')
      UserAuthService.postSignupUserData(vm.username, vm.password, vm.email)
      .then(function(data){
        console.log(data, 'grabgrabgrab')
      })
    }

    function grabLoginUserData($window){
      console.log('grabbeddadata')
      UserAuthService.getLoginUserData(vm.user, vm.pass)
      .then(function(data){
        console.log(data.data, 'backendbackend')
        localStorage.setItem('token',  data.data.token);
        localStorage.setItem('id', data.data.id);
        localStorage.setItem('username', data.data.username);
      })
    }
  }


  // function UserAuthController($location, $state, searchService) {
  //   var vm = this;
  //   vm.search = '';
  //   vm.autoComplete = autoComplete;
  //   vm.submitSearch = submitSearch;

  //   /* *
  //   * autoComplete() automatically completes user-inputted location queries.
  //   *
  //   * submitSearch():
  //   *   - retrieves the user-inputted value and submits it to /api/search to make external API calls.
  //   *   - redirects the user to /trip
  //   * */

  //   function autoComplete() {
  //     searchService.autoComplete();
  //   }

  //   //vm.search is address (santa monica), first thing, goes to serachService first.
  //   function submitSearch() {
  //     vm.search = document.getElementById('searchTextField').value;
  //     searchService.submitSearch(vm.search)
  //       .then(function() {
  //         $location.path('/trip');
  //       })
  //       .catch(function(err) {
  //         console.log('err in UserAuthController submitSearch', err);
  //       });
  //   }

  //   function init() {
  //     vm.autoComplete();
  //     google.maps.event.addDomListener(window, 'load', vm.autoComplete);
  //   }

  //   init();
  // }
})();
