var socketio = require('socket.io');

function listen(server) {
  var io = socketio.listen(server);

  io.on('connection', function(socket){
    console.log('user connected');

    socket.on('new user', function(data){
      console.log('new user: ', data);
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
    });

  });

  return io;

}

module.exports = {
  listen: listen
};
