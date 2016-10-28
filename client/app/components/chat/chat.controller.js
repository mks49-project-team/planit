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
    // var url = $window.location.href;
    // var ind = url.indexOf('uuid=');
    // var room = url.slice(ind + 5);
    // console.log("url: ", url);
    // setTimeout(function(){
    //   console.log('room after 6s', room)
    // }, 6000);
    var uuid;
    $scope.$on('uuidChange', function(event, args){
      uuid = args.val;
      console.log('uuid: ', uuid);
    });

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
})();
