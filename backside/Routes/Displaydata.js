// const login  = require( '../../src/Pages/Login')
// const {useCart} = require("../../src/Components/Reducer.js")
// import {sumne} from '../db'
// import db  from '../db'
const mongoose = require('mongoose');
const User = require("../User");
const express = require("express");
const router = express.Router()
mongoose.set('strictQuery', true)
// mongoose.set('strictQuery', true)

router.use(express.json())

router.post('/foodData' , (req ,res)=> {

   
 try {
   //  console.log(global.foodCat)
   //  res.status(status).send()
    res.send([global.food_items, global.foodCat])
 } catch (error) {
    console.log(error.message);
    res.send("error")
 }
})

router.post("/myorders" ,async (req , res)=> {
 
  
  
 
   
   let emaill = req.body.mail;
   // localStorage.setItem("realemail" , emaill)
   // const fetched_data = User.findOne({ email:emaill });
   // console.log(fetched_data)

   
      // const fetched_data = await mongoose.connection.db.collection("users");
      try {
         global.user.updateOne(
            { "email" : emaill },
            { $push: { "history" : req.body.cart } }
         );
      } catch (e) {
         console.log(e);
      }


})

 
   
        
       
// res.send()
   
   // const fetched_data = await mongoose.connection.db.collection("users");
   // fetched_data.find({email:emaill}).toArray(function(err , data){
   
   //  console.log(data)
   // })
   // fetched_data.updateOne({history:{}},{$push:{...req.body.cart}})

   // const fetched_data = mongoose.connection.db.users.findOne({email:emaill})
   // // console.log(found)
   // fetched_data.find({}).toArray(function(err , data){
   //     console.log(data)
   // })
   //  fetched_data.findOneAndUpdate({email:{emaill}},{$push:{data}})

//  await mongoose.connection.db.users.findOneAndUpdate({email : emaill}, 
//    {$push:{"history" :req.body.cat}}).then(() => {
//       res.json({ success: true })
//   })

          
 


module.exports = router;
