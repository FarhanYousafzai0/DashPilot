import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://Farhanyousafzai:7oFiewW3eCkARyPi@cluster0.xh4tvqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      
    );

    console.log(`✅ MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    
  }
};
