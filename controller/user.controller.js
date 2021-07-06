'use strict '
const userModel=require ('../models/user.models')

const booksShow=(req,res)=>{
    userEmail=req.query.email,
    // arryEnd=req.query.arryBooks

    userModel.findOne({email:userEmail},(error,user)=>{
        if(error){
            res.send(error,massege)
        }else{

            res.send(user)
        }
    })

}
module.exports=booksShow