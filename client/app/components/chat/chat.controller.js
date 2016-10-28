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

        // get previous chat history if it exists
        chatService.getChat(uuid)
          .then(function(chats){
            if(chats.length > 0){
              vm.messages = chats;
              updateScroll();
            }
          });

        socket.emit('new user', {
          username: $window.localStorage.username,
          room: uuid
        });

        socket.on('message created', function(data){
          console.log('message from server: ', data);
          $scope.$apply(function(){
            vm.messages.push(data);
            updateScroll();
          });
        });
      });

      vm.sendMsg = function(){
        socket.emit('new message', {
          username: $window.localStorage.username,
          text: vm.text,
          room: uuid,
          timestamp: new Date()
        });
        vm.text = '';
      };

      function updateScroll() {
        var element = document.getElementById('messages');
        // console.log(element.scrollHeight);
        element.scrollTop = element.scrollHeight -100;

      }
    }
  }
})();
