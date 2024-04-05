import login from "./Controllers/login";

export default function handler(req, res){
    if (req.method === 'POST') {
        login(req, res);
      } else {
        res.status(405).json({ message: 'Method not allowed' });
      }
}