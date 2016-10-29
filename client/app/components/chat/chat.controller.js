(function(){
  'use strict';

  angular
    .module('app.chat')
    .controller('chatController', chatController);

    chatController.$inject = ['$scope', '$window', 'chatService'];

    function chatController($scope, $window, chatService) {
      var vm = this;
      vm.otherUserTyping;
      vm.messages = [];
      var uuid;

      $scope.$on('uuidChange', function(event, args){
        uuid = args.val;
        initChat(uuid);
      });

      function initChat(uuid){
        var typing = false;
        var timeoutID = undefined;
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
            $scope.$apply(function(){
              vm.messages.push(data);
              updateScroll();
            });
          });

          socket.on('is typing', function(data){
            $scope.$apply(function(){
              vm.otherUserTyping = true;
              vm.typingUser = data.username;
            });
          });

          socket.on('stopped typing', function(data){
            $scope.$apply(function(){
              vm.otherUserTyping = false;
            });
          });

      });

      vm.sendMsg = function() {
        socket.emit('new message', {
          username: $window.localStorage.username,
          text: vm.text,
          room: uuid,
          timestamp: new Date()
        });
        vm.text = '';
      }

      vm.sendTypingEvent = function(event) {
        if(typing === false && event.keyCode !== 13){
          typing = true;
          socket.emit('user typing', {
            username: $window.localStorage.username,
            room: uuid
          });
          timeoutID = setTimeout(resetTyping, 1000);
        } else {
          window.clearTimeout(timeoutID);
          timeoutID = setTimeout(resetTyping, 1000);
        }
      }

      function resetTyping(){
        // resets typing event
        typing = false;
        socket.emit('user stopped typing', {
          username: $window.localStorage.username,
          room: uuid
        });
      }

      function updateScroll() {
        var element = document.getElementById('messages');
        element.scrollTop = element.scrollHeight;
      }
    }
  }
})();
