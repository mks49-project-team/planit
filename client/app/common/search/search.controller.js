// determines what happens in each view... response to the interactions of the view.

(function() {
  'use strict';

  angular
    .module('app.search')
    .controller('searchController', SearchController);

  SearchController.$inject = [$state, 'searchService'] //research what this does.

  var vm = this;
  vm.search = {};
  vm.searchResults = searchResults;

  




})();
