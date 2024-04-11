import mongoose from "mongoose";
import MinerModel from "../Model/Miner";
import axios from "axios";


export default class Miner {
    constructor(userId, hashRate, cost) {
        this._id = new mongoose.Types.ObjectId();
        this.userId = userId; // User ID associated with the miner
        this.hashRate = hashRate;  
        this.cost = cost;  
        this.totalMinedToday = 0; 
        this.miningStarted = false; 
        this.dailyInterestRate = 0.00823; 
        this.timeToMine = 24 * 60 * 60 * 365; 
        this.btcToUsd = 0; // Initialize BTC to USD exchange rate
    }

    async fetchBTCPrice() {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
            this.btcToUsd = response.data.bitcoin.usd; // Get Bitcoin price in USD from response
        } catch (error) {
            console.error('Error fetching BTC price:', error.message);
        }
    }

    async saveToDatabase() {
        // Check if a miner record exists for the user
        let miner = await MinerModel.findOne({ userId: this.userId });
        if (!miner) {
            // If no record exists, create a new miner record
            miner = new MinerModel({
                _id: this._id,
                userId: this.userId,
                hashRate: this.hashRate,
                cost: this.cost,
                totalMinedToday: this.totalMinedToday,
                miningStarted: this.miningStarted,
                btcToUsd: this.btcToUsd
            });
        } else {
            // If a record exists, update the existing record
            miner.hashRate = this.hashRate;
            miner.cost = this.cost;
            miner.totalMinedToday = this.totalMinedToday;
            miner.miningStarted = this.miningStarted;
            miner.btcToUsd = this.btcToUsd;
        }
        // Save the miner record to the database
        await miner.save();
        console.log(`Miner data saved to database for user ${this.userId}`);
    }

    static async loadFromDatabase(userId) {
        // Load miner data from the database for the given user ID
        const minerData = await MinerModel.findOne({ userId });
        if (minerData) {
            // If miner data exists, create a new miner instance and initialize with the stored data
            const miner = new Miner(userId, minerData.hashRate, minerData.cost);
            miner.totalMinedToday = minerData.totalMinedToday;
            miner.miningStarted = minerData.miningStarted;
            miner.btcToUsd = minerData.btcToUsd;
            return miner;
        } else {
            // If no miner data exists, return null
            return null;
        }
    }

    startMining() {
        // Start mining
        this.miningStarted = true;
        console.log(`Mining started for Miner ${this.userId} with cost $${this.cost}`);
        this.mine();
        // Fetch BTC price once mining starts
        this.fetchBTCPrice();
        // Save miner data to the database
        this.saveToDatabase();
    }

    stopMining() {
        // Stop mining
        this.miningStarted = false;
        console.log(`Mining stopped for Miner ${this.userId}`);
        // Save miner data to the database when mining stops
        this.saveToDatabase();
    }

    mine() {
        // Mine continuously until the end of the day
        setInterval(() => {
            if (this.miningStarted) {
                const minedPerSecond = (this.dailyInterestRate / this.timeToMine) * this.cost; // Value mined per second in BTC
                this.totalMinedToday += minedPerSecond;
                // Save miner data to the database every minute
                this.saveToDatabase();
            }
        }, 1000); // Update mining value every second
    }

    get totalMinedTodayUSD() {
        // Calculate total mined value today in USD
        return this.totalMinedToday * this.btcToUsd;
    }
}


// Function to create a new miner
// function createMiner(hashRate, cost) {
//     const miner = new Miner(hashRate, cost);
//     miner.startMining(); // Start mining when the miner is created
//     return miner;
// }
