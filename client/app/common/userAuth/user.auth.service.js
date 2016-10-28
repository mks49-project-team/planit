(function() {
  'use strict';

  angular
    .module('app.userAuth')
    .factory('UserAuthService', UserAuthService);

  UserAuthService.$inject = ['$http'];

  function UserAuthService($http) {
    var service = {
      postSignupUserData: postSignupUserData,
      getLoginUserData: getLoginUserData
    };
    return service;

    function postSignupUserData(username, password, email) {
      return $http({
        method: 'POST',
        url: '/api/users',
        data: {
          username: username,
          password: password,
          email: email
        }
      })
    }

    function getLoginUserData(username, password){
      return $http.get('/api/users', {params: {
          username: username,
          password: password
          }})
      // ({
      //   method: 'GET',
      //   url: '/api/users'
      //   config {
      //     params : {
      //     username: username,
      //     password: password
      //     }
      //   }
      // })
    }



  }

  




  // function UserAuthService($http) {
  //   var service = {
  //     autoComplete: autoComplete,
  //     submitSearch: submitSearch
  //   };

  //   return service;

  //   ///////////////

  //   function autoComplete() {
  //     var options = {
  //       types: ['(cities)']
  //     };

  //     var input = document.getElementById('searchTextField');
  //     var autocomplete = new google.maps.places.Autocomplete(input, options);
  //   }

  //   function submitSearch(locName) {
  //     console.log(locName, 'zxcvzxcv')
  //     return $http({
  //       method: 'POST',
  //       url: '/api/search',
  //       headers: { 'Content-Type': 'application/json' },
  //       data: { locationName: locName }
  //     });
  //   }
  // }
})();
