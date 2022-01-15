const express = require(`express`);
const database = require(`../../database/database`)
const router = express.Router();
var con = database.con;
router.delete(`/`,(req, res) => {
var parameter = req.query
var id = parameter.id
con.query(
  `SELECT * FROM users WHERE ID = '${id}';`,
  function (err, result) {
    if (err) throw err;
    if (result.length === 0) {
      res.status(400).send("No such user with this id found");
    } 
    else if(result.length === 1){
con.query(`DELETE FROM users WHERE ID = '${id}';`,
function (err, result) {
  if (err) throw err;
});
res.send("Deleted Successfully")
    }
    else{
      res.status(500).send("Internal Server Error")
    }
});})
module.exports = router;
