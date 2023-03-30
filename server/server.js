import express from "express";

import bodyParser from "body-parser";
import cors from "cors";

// const model=require('./Schema/Signup');
const app = express();
app.use(cors({ credentials: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/",(req,res)=>
{
    res.send("hello")
})
// app.post('/data',(req,res)=>{
//     const newUser=new model({
//         mail:req.body.email,
//         UserName:req.body.UserName,
//         password:req.body.password,
//         MobileNumber:req.body.MobileNumber
//     })
//     const exist=model.findOne({mail:req.body.UserName})
//     if(exist)
//     {
//         return res.send("username already exists")
//     }
//     else
//     {
//         newUser.save
//         .then(()=>{
//             return res.send("Registered Succesfully")
//         })
//         .catch((err)=>{
//             res.send("Registration failed",err);
//         })
//     }
// })
// // mongoose.connect('mongodb+srv://sanjay5793:aravind5793@cluster0.rgxiy1o.mongodb.net/Library?retryWrites=true&w=majority',{
// //     useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // }).then(()=>{
// //     console.log('Database is connected');
// // }).catch((err)=>{
// //     console.log(err);
// // })
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
