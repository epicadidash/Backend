const express = require(`express`);
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bycrpt = require (`bcrypt`)
const saltRounds = 10;
const con = require(`../database/connect`)
router.post(`/signup`,body('email').isEmail(), (req, res)=>{ 
    const body = req.body;
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send("invalid email");
    }
    if(!email || !password || !username)
    {
        res.status(400).send("information missing")
    }
    else if(username.length <= 5 )
    {
        res.status(400).send("username lenth too small")
    }
    else if( password.length <= 8)
    {
        res.status(400).send("password length too small ")
    }
    else
    {
        con.connect();
        res.send("hi")
    }
})
module.exports = router