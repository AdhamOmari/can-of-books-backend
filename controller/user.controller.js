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
// add new book 
const addBook=(req,res)=>{
    const {email,name,description,status}= req.body;
    userModel.findOne({email:email}, (error, user)=>{
        if(error){
            res.send('error');
        }else{
            user.arryBooks.push({
                name:name,
                description:description,
                status:status
            })
            user.save();
            res.send(user.arryBooks);
        }
    })
}
// delete book
const deleteBook=(req,res)=>{
    const email=req.query.email;
    const book_id=Number(req.params.index);
    console.log(book_id);
    userModels.findOne({email:email}, (error, user)=>{
        let newBookArra=[];
        user.arryBooks.forEach((el,idx)=>{
            if(idx!==book_id){
                newBookArra.push(el);
            }
        })
        user.arryBooks=newBookArra;
        user.save();
        res.send( user.arryBooks)
    });
}
module.exports={booksShow,addBook,deleteBook};









