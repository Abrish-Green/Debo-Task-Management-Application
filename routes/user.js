const express = require('express')
const router = express.Router()
var crypto = require('crypto');
const User = require('../model/User')
var validator = require('validator');
var jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

// ADD ACCOUNT
router.post('/sign_up', async(req,res)=>{
    const { username , email ,password } = req.body
    
    let error = []
    if(!password) 
        error.push({password: "password can't be empty"})
    if(!username) 
        error.push({username: "username can't be empty"})
    if(!email) 
        error.push({email: "email can't be empty"})
    
    if(error.length > 0){
        return res.status(202).json({
            "error":error
        })
    }

    const newUser = new User(req.body)
    newUser.setPassword(password)
    await newUser.save(function(err,result){
        if (err){
            return res.status(202).json(err);
        }
        else{
            return res.status(200).json({
                "status":"ok",
                "message":"user created successfully",
                "data":result
            })  
        }
    })
    
})


// LOGIN
router.post('/login',async(req,res)=>{

    const { email, password } = req.body
    if((!email || validator.isEmail(email) == false) || (!password))  {
        return res.status(202).json({"error": "Incorrect input"})
    }
    try{
         let user = await User.findOne({ email: email}).exec();    
    if(user != null){
        var inputHash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex');

        if(user.password == inputHash){
            var today = new Date();
            var exp = new Date(today);
            exp.setDate(today.getDate() + 60);
            const jwt_token =  jwt.sign({
                id: user._id,
                email: user.email,
                isAdmin: user.isAdmin,
                exp: parseInt(exp.getTime() / 1000),
            }, process.env.JWT_SECRET) 

             res.cookie("jwt_token", jwt_token, {
                httpOnly: true,
                maxAge: parseInt(exp.getTime() / 1000), // 3hrs in ms
              });

            return res.status(200).json({
                "status":"ok",
                "jwt_token": jwt_token,
                "message":"user logged in successfully"
                
            })
        }
        return res.status(402).json({
            "status":"failed",
            "error":"Incorrect Credential",
        }) 
    }
    
    return res.status(402).json({
        "status":"failed",
        "error":"User Not Found"
    }) 
}catch(err){
    return res.status(402).json({
        "status":"failed",
        "error":err
    }) 
}

})

module.exports = router