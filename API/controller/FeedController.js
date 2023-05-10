const express = require('express');
const Schools_db = require('../Model/schools.js')
const College_db = require('../Model/College.js')
const User_db = require('../Model/User.js')
exports.getSchools = (req,res,next)=>{
    
   Schools_db.getSchools().then(result=>{
    res.json({
        schools:result[0]
    });
   }).catch(err=>{
    console.log(err);
   })
}
exports.getColleges = (req,res,next)=>{
    
    College_db.getColleges().then(result=>{
     res.json({
         colleges:result[0]
     });
    }).catch(err=>{
     console.log(err);
    })
 }
exports.CreatePost = (req,res,next)=>{
    const title = req.body.title;
    const disc = req.body.disc;

    res.status(200).json({
        message : "Welcome to rest api",
        title:title,
        disc:disc
    });
}
exports.Auth = (req,res,next)=>{
    
    User_db.Login(req).then(user=>{
        console.log(user[0][0]);
     if(user[0][0].email_id!=undefined && user[0][0].password==req.body.pass)
     {
        return res.status(200).send("success");
     }
     else
     res.send("Enter correct data");
    }).catch(err=>{   
        return res.status(400).send("failed")
    })
}
exports.save = (req,res,next)=>{
    console.log(req.body.txt);
}