const database = require("../database");
var con  = database.con;

const connect = () => {con.connect((err) => {
    if (err)  throw err;
    else
    console.log("connected")
    
  });}

 
module.exports = 
    {
        "toconnect":connect
    }
