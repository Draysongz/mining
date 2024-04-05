import register from "./Controllers/register";

export default function handler(req, res){
    if (req.method === 'POST') {
        register(req, res);
      } else {
        res.status(405).json({ message: 'Method not allowed' });
      }
}