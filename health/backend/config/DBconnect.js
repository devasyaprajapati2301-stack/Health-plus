import mongoose from "mongoose";

const DBconnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully");

    }catch(error){
        console.log("DB connection failed",error);
    }
}

export default DBconnect;