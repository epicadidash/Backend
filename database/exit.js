const database = require("../database");
var con  = database.con;
const destroy= ()=>{
    con.destroy()
}
module.exports=
{
    "destroy":destroy
}