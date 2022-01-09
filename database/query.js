const database = require("../database");
var con  = database.con;
const query= (sql)=>{
    con.query(sql, function (err, result) {
   if (err) throw err;
   console.log("Result: " + result);
 });}
 module.exports=
{
    
        "toquery":query
    
}