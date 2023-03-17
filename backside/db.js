// const { sumne } = require( '../src/Components/Cart');
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router()
router.use(express.json())
// var sumne;
const mongodb = async(  ) => {await mongoose.connect("mongodb+srv://abhi:abhi@cluster0.m0kddd4.mongodb.net/foodel" , {useNewUrlParser : true }, async(err , result)=>{
if(err){
    console.log("error")
    console.log(err);
}else{
    console.log("connected");
    const fetched_data = mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err , data){
        const foodcat = mongoose.connection.db.collection("food_cat");
        foodcat.find({}).toArray(function(err, catdata){
            if(err) console.log(err);
            else{
                global.food_items =  data;
                global.foodCat = catdata;
                
            }
        } )
       
    }) 
    
    const fetched = mongoose.connection.db.collection("users");
    // fetched.find({}).toJSON(function(err , data){
global.user = fetched;
    // })

    const fetchedd = mongoose.connection.db.collection("users");
    fetchedd.find({}).toArray(function(err , data){
global.realuser = data;
// sumne = data;
// console.log(global.realuser)
    })

}
});

}

router.get("/myordersdisplay" ,async (req , res)=> {
//    let email = localStorage.getItem("realemail")
    const fetchedd = await mongoose.connection.db.collection("users");
    fetchedd.find({}).toArray(function(err , data){
// global.realuser = data;
// console.log(sumne)
// data.map((anodata)=>{
//     // if(anodata === email){
//     //     console.log(anodata)
//     // }
// })

res.send(data)
    })
 })

module.exports = mongodb();
module.exports = router;