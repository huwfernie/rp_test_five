// https://stackoverflow.com/questions/61777531/nodejs-capturing-a-stereo-pcm-wave-stream-into-mono-audiobuffer
import { AudioBuffer } from 'web-audio-api'; // npm
import Microphone from 'node-microphone'; // npm

const rate = 44100;
const channels = 1; // 1 input channels :: was 2

const microphone = new Microphone ({
  channels,
  rate,
  device: 'hw:1,0',
  bitwidth: 16,
  endian: 'little',
  encoding: 'signed-integer'
});

const audioBuffer = new AudioBuffer (
  1, // 1 channel
  30 * rate, // 30 seconds buffer
  rate
});

const chunks = [];
const data = audioBuffer.getChannelData(0);
const stream = microphone.startRecording();

stream.on('data', chunk => chunks.push(chunk))

stream.on('close', () => {
  chunks.reduce((offset, chunk) => {
    for (var index = 0; index < chunk.length; index += channels + 2) {
      let value = 0

      for (var channel = 0; channel < channels; channel++) {
        // Iterates through input channels and adds the values
        // of all the channel so we can compute the
        // average value later to reduce them into a mono signal

        // Multiplies the channel index by 2 because
        // there are 2 bytes per channel sample

        value += chunk.readInt16LE(index + channel * 2)
      }

      // Interpolates index according to the number of input channels
      // (also divides it by 2 because there are 2 bytes per channel sample)
      // and computes average value as well as the interpolation
      // from range [-32768;+32768] to range [-1;+1]
      data[(offset + index) / channels / 2] = value / channels / 32768
    }

    return offset + chunk.length
  }, 0)
})

function setup() {

}

function openStream() {
  const stream = microphone.startRecording();
  stream.on('data', chunk => chunks.push(chunk));
}

function closeStream() {
  microphone.stopRecording();
}
