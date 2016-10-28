var Chat = require('../db').Chat;
var Users = require('../db').Users;
var Trip = require('../db').Trip;

var chatsController = {};

chatsController.GETCHATS = function(req, res){
  var trip_id = req.params.room;
  Trip.findOne({
    where: {
      uuid: trip_id
    }
  })
  .then(function(trip){
    trip.getChats()
      .then(function(chats){

        // Due to schema setup, could not directly query db for usernames
        // associated with chat messages (no relation between users and chats).
        // Instead, iterate through chat messages to get usernames. Implemented
        // using Promise.all() because need to wait for each query to resolve
        // before sending results back to client
        var promises = chats.map(function(chat){
          return new Promise(function(resolve, reject){
            Users.findOne({
              where: {id: chat.dataValues.user_id}
            })
            .then(function(user){
              var chatObj = {
                username: user.dataValues.username,
                text: chat.dataValues.msg,
                timestamp: chat.dataValues.createdAt,
                room: req.params.room
              }
              resolve(chatObj);
            });
          })
        })

        Promise.all(promises)
          .then(function(chatObjs){
            console.log('line 42+++++++++++', chatObjs);
            res.send(chatObjs);
          })
          .catch(function(err){
            console.log('error getting chats: ', err);
            res.send(err);
          })
      });
  });

}

module.exports = chatsController;
