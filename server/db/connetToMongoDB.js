import mongoose from "mongoose";

const connetToMongoDB = async () => {
try {
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("Connected to Mongo DB");
} catch (error) {
    console.log("Error Connecting to MongoDB" , error.message);
}
}

export default connetToMongoDB;