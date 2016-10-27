(function(){
  'use strict';

  angular
  .module('app.chat')
  .controller('chatController', chatController);

  chatController.$inject = ['$scope', '$window', 'chatService'];

  function chatController($scope, $window, chatService) {
    var vm = this;
    vm.messages = [];

    // get uuid as room name
    var url = $window.location.href;
    var ind = url.indexOf('uuid=');
    var room = url.slice(ind + 5);

    var socket = io.connect($window.location.origin);

    socket.on('connect', function(){

      // get previous chat history
      vm.messages = chatService.getChat(room)
        // .then(function(data){
        //   console.log('get chat: ', data);
        //   vm.messages.push(data);
        // })

      socket.emit('new user', {
        username: 'lu',//$window.localStorage.user,
        room: room
      });

      socket.on('message created', function(data){
        console.log('message from server: ', data);
        $scope.$apply(function(){
          vm.messages.push(data);
        });
      });

    })

    vm.sendMsg = function(){
      socket.emit('new message', {
        username: 'lu',
        text: vm.text,
        room: room,
        timestamp: new Date()
      });
      vm.text = '';
    };



  }
})();
