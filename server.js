const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const fs = require('fs');

// const helper = require('./helpers/helper');
// const nodeAudio = require('./helpers/simple-node-audio');

//Static Routes
app.use('/', express.static(path.join(__dirname, '/public')));

//Main App Route
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

// helper.speak();

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });

  // socket.on('request_audio', (data) => {
  //   console.log('request_audio', data);
  //   if (data === true) {
  //     const record = require('node-record-lpcm16')
  //     const fs = require('fs')
  //
  //     const file = fs.createWriteStream('test.wav')
  //
  //     record.start({
  //       sampleRate: 48000,
  //       verbose: true,
  //       device: 'dsnoop:1,0',
  //       recordProgram: 'arecord'
  //     }).pipe(file);
  //   } else {
  //     console.log('false');
  //   }
  // });

  socket.on('request_audio', (data) => {
    console.log('request_audio', data);
    if (data === true) {
      console.log('true');
    } else {
      console.log('false');
    }
    // const stream = nodeAudio.openStream();
    // console.log(stream);
  });

  socket.on('request_video', (data) => {
    console.log('request_video', data);
    if (data === true) {
      console.log('true');
    } else {
      console.log('false');
    }
  });

  socket.on('send_audio', (data) => {
    console.log('send_audio', data);
    if (data === true) {
      console.log('true');
    } else {
      console.log('false');
    }
  });
});

http.listen(4000, function() {
  console.log('listening on *:4000');
  console.log('Try :: open http://192.168.1.169:4000/');
});

process.on('SIGINT',function(){
   console.log('Closing Express Server');
   http.close();
});
// // app.js
// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
//
// app.use(express.static(__dirname + '/node_modules'));
// app.use(express.static(__dirname + '/public'));
// app.get('/', function(req, res,next) {
//     res.sendFile(__dirname + '/index.html');
// });
//
// io.on('connection', function(client) {
//     console.log('Client connected...');
//     client.on('join', function(data) {
//       console.log(data);
//     });
// });
//
// process.on('SIGINT',function(){
//    console.log('Closing database pool');
//    server.close();
// });
//
// server.listen(4001);
