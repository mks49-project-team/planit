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


    socket.on('message created', function(msg){
      console.log('new message from server: ', msg);
      $scope.$apply(function(){
        vm.messages.push(msg);
      });
    });

    vm.sendMsg = function(){
      console.log('vm.newMsg: ', vm.newMsg);
      socket.emit('new message', vm.newMsg);
      vm.newMsg = "";
    };

    vm.toggleChatDisplay = function(){
      vm.showChatBox = !vm.showChatBox;
      console.log('hit');
    }

  }
})();
