// const mongoose=require('mongoose');
import mongoose from "mongoose";

const signup=mongoose.Schema({
    mail:{
        type:String,
        require:true,
    },
    UserName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    MobileNumber:{
        type:Number,
        require:true
    }
}
)
export default signupModel = new mongoose.model("signup", signup);