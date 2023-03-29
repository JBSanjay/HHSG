const mongoose=require('mongoose');

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
module.exports=SignUp=mongoose.model('signup',signup);