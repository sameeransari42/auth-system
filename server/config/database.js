import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Database Connected");
    } catch (error) {
        console.log("Database connection failed:", error.message);
        process.exit(1);
    }
}

export default connectDB;