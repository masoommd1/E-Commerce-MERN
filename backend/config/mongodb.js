import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://rizmasoom786_db_user:ecommerce@cluster0.6xwypfk.mongodb.net/?appName=Cluster0`);
        console.log('db connected')
    } catch (error) {
        console.error(error);
        console.log("error connection datatbase")
    }
}

export default connectDB;