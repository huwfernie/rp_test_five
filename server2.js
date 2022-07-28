// Requires
const express = require('express');
const app = express();
const path = require('path');

// Helpers
const whatsMyIp = require('./helpers/whats-my-ip');
// const commandLine = require('./helpers/command-line');

//Static Routes
app.use('/', express.static(path.join(__dirname, '/public')));

//Main App Route
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
);

//Form Route
app.post('/', (req, res, next) => {
    res.send({data: 'testData'});
  }
);

//Run Server
const port = 4000;
app.listen(port, async () => {
  const ip = '192.168.1.173' || await whatsMyIp();
  console.log(`Listening on port ${port}`);
  console.log(`Try :: open http://${ip}:${port}/`);
});

// const command = 'ffmpeg -ar 8000 -t 60 -ac 1 -f alsa -i hw:1,0 -ac 1 -acodec mp2 -b:a 128k -f rtp rtp://192.168.1.173:4001'
// commandLine(command);

const proc = require('child_process').spawn('/home/pi/darkice.sh');
process.on('SIGINT', () => {
  console.log('Stopping darkice');
  proc.kill('SIGINT');
  console.log('Stopped darkice');
});
