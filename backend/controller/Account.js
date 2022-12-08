import mongoose from "mongoose";
import Account from "../model/Account";
import bcrypt from "bcrypt";

export const accountCreate = async(req,res) => {
    const accountDatails = new Account({
        image:req.file.filename,
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
 
}
