var Chat = require('../db').Chat;
var Users = require('../db').Users;

var chatsController = {};

chatsController.GETCHATS = function(req, res){
  // room id is the same as trip_id
  //var trip_id = req.params.room;
  Chat.findAll({
    where: {
      trip_id: req.params.room
    },
    include: [{
      model: Users,
      where: {id: Sequelize.col('Chat.user_id')}
    }]
  })
  .then(function(chats){
    console.log('chats ', chats);
    res.send(chats)
  })
  .catch(function(err){
    console.log('error getting chats ', err);
  })
  res.send('inside get chats');
}

// chatsController.POSTCHATS = function(req, res){
//   var message = req.body.message;
//
//   var newChat = {
//     msg:
//   }
//   Chat.create()
//   res.send('inside post chats')
// }

module.exports = chatsController;
