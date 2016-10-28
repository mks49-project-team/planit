var socketio = require('socket.io');
var Chat = require('./db').Chat;
var Users = require('./db').Users;
var Trip = require('./db').Trip;

function listen(server) {
  var io = socketio.listen(server);

  io.on('connection', function(socket){
    console.log('user connected');

    socket.on('new user', function(data){
      socket.join(data.room);
      // broadcast to everyone in user's room
      io.in(data.room)
        .emit('message created', {
          username: 'Planit',
          text: data.username + ' has joined!',
          room: data.room,
          timestamp: new Date()
        });
    });

    socket.on('new message', function(data){
      io.in(data.room)
        .emit('message created', data);

      var trip_id;
      // save message to db
      Trip.findOne({
        where: {
          uuid: data.room // query for trip uuid
        }
      })
      .then(function(trip){
        trip_id = trip.id;

        Users.findOne({
          where: {
            username: data.username
          }
        })
        .then(function(user){
          Chat.create({
            user_id: user.id,
            trip_id: trip_id,
            msg: data.text
          })
          .then(function(chat){
            console.log('chat ', chat);
          })
          .catch(function(err){
            console.log('error saving chat to db: ', err);
          });

        })
        .catch(function(err){
          console.log('error finding user in save chat: ', err);
        });

      });
    });

  });

  return io;

}

module.exports = {
  listen: listen
};
