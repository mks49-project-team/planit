var socketio = require('socket.io');

function listen(server) {
  var io = socketio.listen(server);

  io.on('connection', function(socket){
    console.log('user connected');
    socket.on('new message', function(data){
      console.log('msg: ', data);
      io.emit('message created', data);
    });
  });

  return io;

}

module.exports = {
  listen: listen
};
