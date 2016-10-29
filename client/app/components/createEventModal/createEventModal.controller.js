(function() {

  angular
    .module('app.createEventModal')
    .controller('CreateEventModalController', CreateEventModalController);

    CreateEventModalController.$inject = ['$scope', 'ModalService'];

    function CreateEventModalController($scope, ModalService) {
      var vm = this;
      console.log('does this work')
    }


})();