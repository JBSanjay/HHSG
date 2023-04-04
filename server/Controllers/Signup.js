import { signupModel } from "../Schema/Signup.mjs";

export const signup= async (req, res) => {
    var newUser = new signupModel({
          mail:req.body.email,
          UserName:req.body.UserName,
          password:req.body.password,
          MobileNumber:req.body.MobileNumber
    });
  
    await signupModel.findOne({ mail: newUser.mail })
      .then(async profile => {
        if (!profile) {
          await newUser
            .save()
            .then(() => {
              res.status(200).send(newUser);
            })
            .catch(err => {
              console.log("Error is ", err.message);
            });
        } else {
          res.send("User already exists...");
        }
      })
      .catch(err => {
        console.log("Error is", err.message);
      });
  };
