/*
ref: https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js
*/

const commandLine = require('./command-line');

async function whatsMyIp(command) {
  // console.log('What is My Ip Address?');
  const text = await commandLine('ifconfig');
  return text;
}

module.exports = whatsMyIp;
