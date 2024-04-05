
import User from "../Model/User";
import bcrypt from 'bcrypt'
import connectDB from "../db/connection";



export default async function (req, res){
    await connectDB()

    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt)
  
      
      const emailExists = await User.findOne({ email: req.body.email });
      // const phoneExists = await User.findOne({ phone: req.body.number });
      if (emailExists) {
        return res.status(503).json('Email exists' )
      } 
  
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: hash,
          email: req.body.email,
        })
        
        const savedUser = await newUser.save()
        return res.status(200).json(savedUser)
      
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
