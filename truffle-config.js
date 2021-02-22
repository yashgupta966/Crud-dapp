const fs = require('fs');
var HDWalletProvider = require("truffle-hdwallet-provider");
const secrets = JSON.parse(
  fs.readFileSync(".secrets").toString().trim()
);
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(secrets.seed, `https://ropsten.infura.io/v3/${secrets.projectId}`)
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};
