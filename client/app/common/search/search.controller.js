(function() {
  'use strict';

  angular
    .module('app.search')
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$location', '$state', 'searchService', 'UserAuthService'];

  function SearchController($location, $state, searchService, UserAuthService) {
    var vm = this;
    vm.search = '';
    vm.autoComplete = autoComplete;
    vm.submitSearch = submitSearch;


    /* *
    * autoComplete() automatically completes user-inputted location queries.
    *
    * submitSearch():
    *   - retrieves the user-inputted value and submits it to /api/search to make external API calls.
    *   - redirects the user to /trip
    * */

    function autoComplete() {
      searchService.autoComplete();
    }

    function submitSearch() {
      if (localStorage.getItem('id') === null) {
        UserAuthService.fromExplored = true;
        $location.path('/signup')
      } else {
      vm.search = document.getElementById('searchTextField').value;
      searchService.submitSearch(vm.search)
        .then(function() {
          $location.path('/trip');
        })
        .catch(function(err) {
          console.log('err in SearchController submitSearch', err);
        });
     }
    }

    function init() {
      vm.autoComplete();
      google.maps.event.addDomListener(window, 'load', vm.autoComplete);
    }

    init();
  }
})();
