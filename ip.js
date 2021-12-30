var os = require("os");

module.exports = function () {
  let needHost = "";
  try {
    // 获得网络接口列表
    let network = os.networkInterfaces();
    getIpStr: for (let dev in network) {
      let iface = network[dev];
      for (let i = 0; i < iface.length; i++) {
        let alias = iface[i];
        if (
          alias.family === "IPv4" &&
          alias.address !== "127.0.0.1" &&
          !alias.internal
        ) {
          needHost = alias.address;
          break getIpStr;
        }
      }
    }
  } catch (e) {
    needHost = "localhost";
  }
  return needHost;
};
