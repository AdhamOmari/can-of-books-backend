'use strict '
const userModel=require ('../models/user.models')

const booksShow=(req,res)=>{
    userEmail=req.query.email,
    arryEnd=req.query.arryBooks

    userModel.findOne({email:userEmail,arryBooks:arryEnd},(error,user)=>{
        if(error){
            res.send(error,massege)
        }
        res.send(user)
    })

}
module.exports=booksShow