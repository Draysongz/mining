import User from '../Model/User';
import bcrypt from 'bcrypt'
import connectDB from '../db/connection';
// import { jwtVerify, SignJWT} from 'jose'
// import { cookies } from 'next/headers';





// const secretKey = process.env.SECRET_KEY
// const key = new TextEncoder().encode(secretKey)


// export async function encrypt(payload){
// return await new SignJWT(payload)
// .setProtectedHeader({alg: 'HS256'})
// .setIssuedAt()
// .setExpirationTime('10 sec from now')
// .sign(key)

// }


// export async function decrypt(input){
//     const {payload} = jwtVerify(input, key, {
//         algorithms: ['HS256'],
//     });

//     return payload;
// }

// export async function getSession(){
//     const session = cookies().get('session')?.value
//     if(!session) return null;
//     return await decrypt(session)
// }

// export async function updateSession(request){
//     const session= request.cookies.get('session')?.value
//     if(!session) return;

//     const parsed = await decrypt(session)
//     parsed.expires = new Date(Date.now() +10 *1000)
//     let res;

//     res.cookies.set({
//         name: 'session',
//         value: await encrypt(parsed),
//         httpOnly:true,
//         expires: parsed.expires
//     })
//     return res

// }
export default async function(req, res){
    await connectDB()
    try {
       const user = await User.findOne({email: req.body.email})
       if(!user)return res.status(404).json('User not found')

       const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password,)
       if(!isPasswordCorrect)return res.status(401).json('Invalid Password')

       const {password, ...others} = user._doc
    //    const expires = new Date(Date.now() + 10 * 1000)
    //    const session = await encrypt({user, expires})
    //    cookies().set('session', session, {expires, httpOnly:true})
       res.status(200).json({...others})
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}