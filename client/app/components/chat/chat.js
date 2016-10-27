angular.module('app.chat', [])
  // .factory('chatService', function(){
  //
  //   return {
  //
  //   }
  // })
  .controller('chatController', function($scope, $window){
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
    }


  });
