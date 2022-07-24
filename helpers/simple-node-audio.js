// https://github.com/audiojs/web-audio-api
// https://stackoverflow.com/questions/64033665/streaming-microphone-audio-input-through-network-raw-pcm
const webAudioApi = require('web-audio-api');

let context = null;

function openStream() {
  console.log('OPENING');
  context = new webAudioApi.AudioContext();
  // context.outStream = stream;
  return context;
}

function closeStream() {
  console.log("CLOSING");
  context = null;
}

module.exports = {
  openStream,
  closeStream
};
