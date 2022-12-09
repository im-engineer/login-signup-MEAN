import Account from '../model/Account'

export const verifyUser = async (req,res,next) => {
    const EMAIL = req.body.email;
    const isValid = await Account.find({
      email : EMAIL,
      verified:true
    }).count();

    if(isValid){
        next()
    }else{
        res.send({ "status": true, "message": "Please verify your email to login", result: {} })
    }
}   