// determines what happens in each view... response to the interactions of the view.

(function() {
  'use strict';

  angular
    .module('app.search')
    .controller('SearchController', SearchController)

  SearchController.$inject = ['$location', '$state', 'searchService'] //research what this does.

  function SearchController($location, $state, searchService) {

    var vm = this;
    vm.search = '';
    vm.autoComplete = autoComplete
    vm.submit = submit;

    vm.autoComplete();
    google.maps.event.addDomListener(window, 'load', vm.autoComplete);

    function autoComplete() {
      console.log("autocomplete is running")
      return searchService.autoComplete()
    }

    function submit() {
      vm.search = document.getElementById('searchTextField').value;
      console.log(document.getElementById('searchTextField').value);
      console.log('this is search', vm.search);

      return searchService.submit(vm.search)
      .then(function(results){
        console.log("THIS IS RESULTS", results);
        $location.path('/trip');
      })
    }

  }




})();
