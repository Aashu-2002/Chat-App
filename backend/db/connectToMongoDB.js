import mongoose from "mongoose";

const connectToMongoDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connect to DB");
    }
    catch(error){
        console.log("Error in Connecting DB", error.message)
    }
}

export default connectToMongoDB;