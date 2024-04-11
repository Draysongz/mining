import connectDB from "./db/connection";
import Miner from "./Controllers/miner";


export default async function handler(req, res) {
    const { method, body } = req;

    switch (method) {
        case 'POST':
            try {
                const { action, userId, hashRate, cost } = body;

                if (action === 'start') {
                    const miner = new Miner(userId, hashRate, cost); // Provide necessary parameters
                    miner.startMining();
                    return res.status(200).json(miner);
                }
            } catch (error) {
                console.error('Error:', error.message);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

        default:
            return res.status(405).json({ message: 'Method Not Allowed' });
    }



}