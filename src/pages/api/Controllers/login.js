import User from '../Model/User';
import bcrypt from 'bcrypt'
import connectDB from '../db/connection';


export default async function(req, res){
    await connectDB()
    try {
        
       const user = await User.findOne({email: req.body.email})
       if(!user)return res.status(404).json('User not found')

       const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password,)
       if(!isPasswordCorrect)return res.status(401).json('Invalid Password')

       const {password, ...others} = user._doc
       res.status(200).json({...others})
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}