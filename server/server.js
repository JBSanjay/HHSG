import express from "express";
// import {Route} from "./Routes/Router";
// import {Signup} from "./Schema/Signup";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from 'mongoose';
// import User from './Schema/Signup';
// import { signupModel } from "./Schema/Signup";
// var {User}=require('./Schema/Signup.cjs');
// const model=require('./Schema/Signup');
const app = express();
app.use(cors({ credentials: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/",(req,res)=>
{
    res.send("hello")
})
app.get("/d",(req,res)=>{
  res.status(200)
})
app.get("/tr",(req,res)=>{
  async(e)=>{let t={
    name:"Sanjay"
  }
  await t.save;
  res.send("posted")
}
})

// app.post('/data',(req,res)=>{
//     const newUser=new model({
//         mail:req.body.email,
//         UserName:req.body.UserName,
//         password:req.body.password,
//         MobileNumber:req.body.MobileNumber
//     })
//     if(req.body.email==="")
//     {
//       res.send("Invalid data");
//     }
//     const exist=await model.findOne({mail:req.body.UserName})
//     if(exist)
//     {
//         return res.send("username already exists")
//     }
//     else
//     { async()=>{
//        await newUser.save
//         .then(()=>{
//             return res.send("Registered Succesfully")
//         })
//         .catch((err)=>{
//             res.send("Registration failed",err);
//         })
//     }
//   }
// })
// app.post('/username',(req,res)=>{
  
// })
mongoose.connect('mongodb+srv://sanjay5793:aravind5793@cluster0.rgxiy1o.mongodb.net/Library?retryWrites=true&w=majority',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('Database is connected');
}).catch((err)=>{
    console.log(err);
})
// mongoose.connect('mongodb://localhost:27017/signup',{
//     useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(()=>{
//     console.log('Database is connected');
// }).catch((err)=>{
//     console.log(err);
// })

app.listen(2000, () => {
  console.log("The port is running at 2000");
});
