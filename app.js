// Requires
const whatsMyIp = require('./helpers/whats-my-ip');

async function app() {
  let ip = await whatsMyIp();
  console.log(`Raspberry Pi ip address :__${ip}__`);
}

app();
