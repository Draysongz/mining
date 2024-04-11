// Import Mongoose
import mongoose from 'mongoose'

let MinerModel;

if (mongoose.models && mongoose.models.Miner) {
    MinerModel = mongoose.models.Miner;
} else {
    const minerSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        hashRate: {
            type: Number,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        totalMinedToday: {
            type: Number,
            default: 0
        },
        miningStarted: {
            type: Boolean,
            default: false
        },
        btcToUsd: {
            type: Number,
            default: 0
        }
    });

    MinerModel = mongoose.model('Miner', minerSchema);
}

export default MinerModel;