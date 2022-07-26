/*
  Returns the IP address of wlan0
*/

const commandLine = require('./command-line');

async function whatsMyIp(command) {
  // console.log('What is My Ip Address?');
  const text = await commandLine('ifconfig');
  // @TODO replace with REGEX
  const ip = text.split('wlan0')[1].split('inet ')[1].split('  netmask')[0].trim();
  // console.log(`Raspberry Pi ip address : ${ip}`);
  return ip;
}

module.exports = whatsMyIp;


// FOR TESTING

/*
const text = `eth0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether b8:27:eb:10:4a:74  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 20  bytes 2332 (2.2 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 20  bytes 2332 (2.2 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.169  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::f695:74c3:f5cf:e761  prefixlen 64  scopeid 0x20<link>
        inet6 2a01:4b00:9d8f:800:ed58:67e0:9b83:9c3f  prefixlen 64  scopeid 0x0<global>
        inet6 fd00::bf87:5e8e:7062:5455  prefixlen 64  scopeid 0x0<global>
        ether 44:33:4c:34:4d:80  txqueuelen 1000  (Ethernet)
        RX packets 98  bytes 13295 (12.9 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 119  bytes 18746 (18.3 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0`

// const ip = /wlan0[\s\S]*?inet( *)(.*?)( *)netmask/gm
// const ip = text.match(/wlan0[\s\S]*?inet( *)(.*?)( *)netmask/gm);
// const ip = text.replace(/([\s\S]*?wlan0[\s\S]*?inet )/gm, '$1');
const ip = text.split('wlan0')[1].split('inet ')[1].split('  netmask')[0];

console.log(ip);
*/
