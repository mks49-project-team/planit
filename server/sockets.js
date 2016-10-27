var socketio = require('socket.io');

function listen(server) {
  var io = socketio.listen(server);

  io.on('connection', function(socket){
    console.log('user connected');
    socket.on('new message', function(data){
      io.emit('message created', data);
    });

    socket.on('new user', function(username){
      io.emit('message created', {
        username: 'Planit',
        text: username + ' has joined!'
      });
    });
  });

  return io;

}

module.exports = {
  listen: listen
};
