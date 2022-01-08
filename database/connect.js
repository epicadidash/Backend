const database = require("../database");
var con  = database.con;
const connect = () => {con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });}
module.exports = 
    {
        "connect":connect
    }
