import mongoose from "mongoose";



const userSchema = new mongoose.Schema(
    {
      userId: mongoose.Types.ObjectId,
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true, unique:true },
      password: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  export default mongoose.models.User || mongoose.model("User", userSchema);