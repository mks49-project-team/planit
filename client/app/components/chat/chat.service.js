(function(){
  'use strict';

  angular
  .module('app.chat')
  .factory('chatService', chatService);

  chatService.$inject = ['$http'];

  function chatService($http){
    function getChat(room){
      // retrieves chat for trip
      return $http({
        method: 'GET',
        url: '/api/chats/' + room
      })
      .then(function(response){
        return response.data;
      })
      .catch(function(err){
        return err;
      });
    }
      // standalone test function
      // function getChat(uuid){
      //   console.log('getchat uuid: ', uuid);
      //   return [
      //     {username: 'a', room: 'ulr6BRxQjU', text: 'asfasdf'},
      //     {username: 'b', room: 'ulr6BRxQjU', text: 'blah'}
      //   ];
      // }


    return {
      getChat: getChat
    }

  }
})();
