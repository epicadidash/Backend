const express = require(`express`);
const database = require(`../../database/database`)
const router = express.Router();
var con = database.con;
router.delete(`/:id`,(req, res) => {
var parameter = req.params
var id = parameter.id
con.query(
  `SELECT * FROM users WHERE ID = '${id}';`,
  function (err, result) {
    if (err) throw err;
    if (result.length === 0) {
      res.send("No such user with this id found");
    } 
    else {
con.query(`DELETE FROM users WHERE ID = '${id}';`,
function (err, result) {
  if (err) throw err;
});
res.send("Deleted Successfully")
    }
});})
module.exports = router;
