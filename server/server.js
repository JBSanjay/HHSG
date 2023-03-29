const express=require('express');
const mongoose=require('mongoose');
const app=express();
const model=require('./Schema/Signup');
const cors=require('cors');
const bodyparser=require('body-parser');
app.use(cors);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.send('Hi Welcome to the Login and Signup API');
  });
    

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

app.listen(2000,()=>{
    console.log("The port is running at 2000");
})


