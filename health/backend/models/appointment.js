import mongoose, { mongo } from "mongoose";

const appointSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mode:{
        type:String,
        required:true
    }
},{timestamps:true})

const Appointment = mongoose.model("Appointment",appointSchema);
export default Appointment ;