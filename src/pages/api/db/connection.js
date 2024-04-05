import {connect} from "mongoose";


const MONGO_URI = process.env.MONGO_URI || ""

const connectDB = async()=>{
    try {
        await connect(MONGO_URI);
        console.log('Db connected successfully');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB