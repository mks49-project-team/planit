(function(){
  'use strict';

  angular
  .module('app.chat')
  .controller('chatController', chatController);

  chatController.$inject = ['$scope', '$window', 'chatService'];

  function chatController($scope, $window, chatService) {
    var vm = this;

    var uuid;
    $scope.$on('uuidChange', function(event, args){
      uuid = args.val;
      initChat(uuid);
    });

    function initChat(uuid){
      vm.messages = [];

      var socket = io.connect($window.location.origin);

      socket.on('connect', function(){

        // get previous chat history
        vm.messages = chatService.getChat(uuid)
        // .then(function(data){
        //   console.log('get chat: ', data);
        //   vm.messages.push(data);
        // })

        socket.emit('new user', {
          username: 'mike',//$window.localStorage.user,
          room: uuid
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
          username: 'mike',
          text: vm.text,
          room: uuid,
          timestamp: new Date()
        });
        vm.text = '';
      };
    }



  }
})();
