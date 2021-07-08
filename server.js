'use strict';
const express=require('express');
const app=express();
const cors=require('cors');
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
require('dotenv').config();
app.use(cors());
const mongoose = require('mongoose');
const {booksShow,addBook,deleteBook} = require('./controller/user.controller');


mongoose.connect('mongodb://localhost:27017/user',
{ useNewUrlParser: true, useUnifiedTopology: true });


const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  });

// this is a ready to use function
const getKey=(header, callback)=>{
    client.getSigningKey(header.kid, function(err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
}
app.get('/',(req,res)=>{
    res.send('proof of life route')
});

// 'Bearer ;alsdkj;laskd;lkasd;lkl'
app.get('/authorize',(req,res)=>{
    const token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send('invalid token');
        }
        res.send(user)
    })
    
    res.send(token);
});


app.get('/book',booksShow);

app.post('/addbook',addBook);

// user delete book end-point
app.delete('/deletebook/:index',deleteBook)


app.listen(process.env.PORT,()=>{
    console.log(`listening to port: ${process.env.PORT}`);
})