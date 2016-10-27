(function(){
  'use strict';

  angular
  .module('app.chat')
  .controller('chatController', chatController);

  chatController.$inject = ['$scope', '$window'];

  function chatController($scope, $window) {
    var vm = this;
    vm.messages = [];


    var socket = io.connect($window.location.origin);

    socket.on('connect', function(){
      socket.emit('new user', 'lu');

      socket.on('message created', function(data){
        $scope.$apply(function(){
          vm.messages.push(data);
        });
      });

    })




    vm.sendMsg = function(){
      socket.emit('new message', {
        username: 'lu',
        text: vm.text
      });
      vm.text = "";
    };



  }
})();
