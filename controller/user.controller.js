'use strict '
const userModel=require ('../models/user.models')

const booksShow=(req,res)=>{

     userEmail=req.query.email,
     arryEnd = req.query.arryBooks

    userModel.findOne({email:userEmail,arryBooks:arryEnd},(user)=>{
        if(!user){
            res.send('not find')
        }
        res.send(user.arryEnd);
        console.log('this is from the user controller',user);

    userEmail=req.query.email,
    // arryEnd=req.query.arryBooks

    userModel.findOne({email:userEmail},(error,user)=>{
        if(error){
            res.send(error,massege)
        }else{

            res.send(user)
        }
 main
    })

}
module.exports=booksShow