// import { useCart}  from "../../src/Components/Reducer";
const express = require("express");
// const { default: mongoose } = require('mongoose');
const router = express.Router();
const User = require("../User");
// const bodyParser = require("body-parser");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecret = "mynameisabhirajtodayis17/02/23"
const { body, validationResult } = require("express-validator");
const Display = require('./Displaydata')
// const {useCart} = require("../../src/Components/Reducer.js")


// const express = require("express");
const mongoose = require("mongoose")
// const { aggregate } = require("../User");


router.post(
  "/create",
  [
    body("email", "invalid email").isEmail(),
    // password must be at least 5 chars long
    body("password", "password should be more than 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //    var user1 = new User({
    //     name : req.body.email,
    //     password : req.body.password,
    //     location : req.body.location
    //    })
const salt =await bcrypt.genSalt(10);
let saltPassword = await bcrypt.hash(req.body.password , salt);
    try {
      // user1.save();
      var myData = new User(req.body);
      myData.password = saltPassword;
      myData.history = [];
      myData.save();

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/login",
  [
    body("email", "invalid email").isEmail(),
    // password must be at least 5 chars long
    body("password", "password should be more than 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let useremail = await User.findOne({ email });

      const passCompare = await bcrypt.compare(req.body.password , useremail.password)
      if (!useremail || !passCompare ) {
        return res.status(400).json({ errors: "invalid" });
      }

      const data = {
        users : {
          id : useremail.id
        }
      }

      const authToken = jwt.sign(data , jwtSecret);

      return res.json({ success: true , authToken : authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);




module.exports = router;
