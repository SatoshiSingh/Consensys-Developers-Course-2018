module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" //truffle will deploy to any network running at localhost:8545
    }
  }
};