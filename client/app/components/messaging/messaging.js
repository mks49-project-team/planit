  var app = require('express')();
  var http = require('http').Server(app);
  var io = require('socket.io')(http);

  var port = process.env.PORT || 8000


  io.on('connection', function(socket){
    console.log('user connected')
    socket.on('chat message', function(message){
      io.emit('chat message', message);
    });
    socket.on('disconnect', function(){
      console.log('a user disconnected')
    })
  })


  http.listen(port, function(){
    console.log('listening on port: ', port)
  })


