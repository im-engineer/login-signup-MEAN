import mongoose from "mongoose";
import Account from "../model/Account";
import bcrypt from "bcrypt";
import jwt from"jsonwebtoken";
import {SendEmail} from "../middleware/sendMail"


export const accountCreate = async(req,res) => {
    const otp = Math.floor(Math.random() * 1234 + 1000);
    // try{
        const accountDatails = new Account({
            // image:req.file.filename,
            firstname:req.body.firstname,
            middlename:req.body.middlename,
            lastname:req.body.lastname,
            fullname:req.body.fullname,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            confirmpassword: bcrypt.hashSync(req.body.password, 8),
            mobileno:req.body.mobileno,
            gender:req.body.gender,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
        })
        const message = `Hello your verification code is ${otp} . `;
        var emailDetails = await SendEmail('azmsiddhant1@gmail.com',req.body.email,'Verificaton code',message)
        const accountData = await accountDatails.save();
        if(accountData){
            res.send({
                isSuccess : "true",
                message : "Account created successfully",
                data:accountData
            })
        }else{
            res.send({
                isSuccess : "false",
                message : "Something went wrong",
            })
        }
    // }catch(err){
    //     res.send({
    //         isSuccess:false,
    //         message:err
    //     })
    // }
    
 
}


export const verifyOTP = async (req, res) => {
  const EMAIL = req.body.email;
  const OTP = req.body.otp;
  const newotp = Math.floor(Math.random() * 1234 + 1000);
  console.log("OLD ->", OTP, "NEW ->", newotp);
  const isValid = await Account.find({
    email: EMAIL,
    otp: OTP
  }).count();
  console.log("🚀 ~ file: Account.js:61 ~ verifyOTP ~ isValid", isValid);
  if (isValid) {
    // update
    const filter = {
      email: EMAIL,
      otp: OTP
    }
    const update = {
      verified: true,
      otp: newotp
    }
    await Account.findOneAndUpdate(filter, update);
    res.send({ status: true, message: "OTP VERIFIED SUCCESFULLY", result: {} })
  } else {
    res.send({ status: false, message: "Incorrect otp", result: {} })
  }
}

  
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Account.findOne({ email });
      if (!user) {
        res.send({ status: false, message: "email not valid" });
      }
      const isValid = bcrypt.compareSync(password, user.password);
      if (isValid) {
        let payload = {};
        payload._id = user._id;
        jwt.sign(
          payload,
          "SECRET_KEY",
          {
            expiresIn: "5m",
          },
          (err, token) => {
            res.send({
              Token: token,
              status: true,
              message: "Login Successfully",
              result: user,
            });
          }
        );
      } else {
        res.send({ status: false, message: "Password is incorrect" });
      }
    } catch (e) {
      res.send({ status: false, messgae: "No Results Found", Result: e });
    }
  };
