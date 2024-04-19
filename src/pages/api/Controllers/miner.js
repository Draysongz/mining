import axios from "axios";


export default class Miner {
  constructor(userId, hashRate, cost) {
    this.userId = userId;
    this.hashRate = hashRate;
    this.cost = cost;
    this.totalMinedToday = 0;
    this.miningStarted = false;
    this.btcToUsd = 0;
    this.lastUpdateTimestamp = Date.now(); // Record the last time the balance was updated
  }

  async fetchBTCPrice() {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      this.btcToUsd = response.data.bitcoin.usd;
    } catch (error) {
      console.error("Error fetching BTC price:", error.message);
    }
  }

  startMining() {
    this.miningStarted = true;
    this.lastUpdateTimestamp = Date.now();
    this.fetchBTCPrice();
    this.mine();
  }

  stopMining() {
    this.miningStarted = false;
  }

  mine() {
    setInterval(() => {
      if (this.miningStarted) {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - this.lastUpdateTimestamp) / 1000; // Convert milliseconds to seconds
        const minedPerSecond = (this.hashRate * elapsedTime) / 1000000000; // Assuming hashRate is in TH/s
        this.totalMinedToday += minedPerSecond;
        this.lastUpdateTimestamp = currentTime;
      }
    }, 1000);
  }

  getCurrentBalance() {
    return this.totalMinedToday;
  }
}


