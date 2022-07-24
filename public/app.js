
function init() {
  console.log('init');
  const socket = this.io();
  socket.on('connect', (data) => {
    console.log(socket);
    console.log("Sockets Are Go");
    // socket.emit('join', 'Hello World from client');
  });

  // socket.on('recieve_audio', (data) => {
  //   // console.log(data.name);
  //   // console.log(data.chunk);
  //   const remoteAudio = document.getElementById("remote-audio");
  //   const newStream = new MediaStream();
  //   newStream.addTrack()
  //   if (remoteAudio) {
  //     remoteAudio.srcObject = data.chunk;
  //   }
  // });


  document.querySelector('#request-audio').addEventListener('change', (e) => {
    console.log('request_audio : ', Boolean(e.target.checked));
    socket.emit('request_audio', Boolean(e.target.checked));
  });

  document.querySelector('#request-video').addEventListener('change', (e) => {
    console.log('request_video : ', Boolean(e.target.checked));
    socket.emit('request_video', Boolean(e.target.checked));
  });

  document.querySelector('#send-audio').addEventListener('change', (e) => {
    console.log('send_audio : ', Boolean(e.target.checked));
    socket.emit('send_audio', Boolean(e.target.checked));
  });
}

window.addEventListener('load', init);
