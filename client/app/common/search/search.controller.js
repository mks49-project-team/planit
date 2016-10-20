// determines what happens in each view... response to the interactions of the view.

(function() {
  'use strict';

  angular
    .module('app.search')
    .controller('SearchController', SearchController);

  SearchController.$inject = [$state, 'searchService'] //research what this does.

  var vm = this;
  vm.search = '';
  vm.input = 'Enter your destination'
  vm.autoComplete = autoComplete

  vm.autoComplete();
  google.maps.event.addDomListener(window, 'load', vm.autoComplete);

  function autoComplete() {
    console.log("autocomplete is running")
    return searchService.autoComplete()
  }

  // vm.submit = submit



})();
