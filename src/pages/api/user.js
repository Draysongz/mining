
import connectDB from "./db/connection";
import User from "./Model/User";

// Handler function for the API route
export default async function handler(req, res) {
  await connectDB();
  if (req.method === 'GET') {
    try {
      // Extract the user ID from the request query parameters
      const { userId } = req.query;
      // Connect to the database
      

      // Find the user in the database based on the provided user ID
      const user = await User.findById(userId);

      // Check if the user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      const { password, ...userData } = user.toObject(); // Convert Mongoose document to plain JavaScript object

      console.log(user)
      // If the user exists, return the user details
      res.status(200).json(userData);

    } catch (error) {
      console.error('Error fetching user:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    // If the request method is not GET, return a 405 Method Not Allowed error
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
