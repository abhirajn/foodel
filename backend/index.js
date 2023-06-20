

const bodyParser = require('body-parser');
const express = require('express');
const cors  =require('cors')

// import  express  from 'express';
// const pageController = require('./Routes/Display');

// const router = express.Router();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin , X-Requested-With , Content-Type , Accept"
    );
    next();

})
// console.log(global.mail)

app.get('/' , (req ,res) =>{
    res.send("hello world");
})

app.use(express.json());
app.use('/api' , require('./Routes/CreateUser') )

app.use('/dis'  , require('./Routes/Displaydata'));
app.use('/api'  , require('./db'));





app.listen(process.env.PORT || 5000 , () =>{
    console.log("port started");
    // console.log(sumne)
})
