import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    image : {type:String,default:null},
    firstname : {type:String,default:null,required:true},
    middlename : {type:String,default:null},
    lastname : {type:String,default:null,required:true},
    fullname : {type:String,default:null,required:true},
    email: {type:String,default:null,required:true},
    password : {type:String,default:null,required:true},
    confirmpassword : {type:String,default:null,required:true},
    mobileno : {type:Number,default:null,required:false},
    gender : {type:String,enum:["Male","Female"],default:null,required:true},
    city : {type:String,default:null,required:true},
    state : {type:String,default:null,required:true},
    country : {type:String,default:null,required:true},
    otp:{type:Number},
    verified: {type: Boolean, default: false},
    created: {type: String,default: new Date().toISOString()},
   
})

export default mongoose.model("account",AccountSchema);