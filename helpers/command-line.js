/*
ref: https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js
*/

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function commandLine(command) {
  if (command !== '') {
    console.log(`commandLine running: ${command}`);
    const { stdout, stderr } = await exec(command);
    // console.log('stdout:', stdout);
    // console.log('stderr:', stderr);
    return stdout;
  }
}

module.exports = commandLine;
