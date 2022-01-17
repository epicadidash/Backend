const express = require(`express`); //express package imported
const router = express.Router(); //using express router module
const database = require(`../../database/database`); //database module imported
var con = database.con; //database connector imported
router.delete(`/`, (req, res) => { //using delete request for deleting note
  var parameter = req.query;
  var id = parameter.id;
  con.query(`SELECT * FROM notes WHERE ID = '${id}';`, function (err, result) {
    if (err) throw err;
    if (result.length === 0) {
      res.status(400).send("No such user with this id found");
    } else if (result.length === 1) {
      con.query(
        `DELETE FROM notes WHERE ID = '${id}';`,
        function (err, result) {
          if (err) throw err;
          res.status(500).send("Internal Server Error");
        }
      );
      res.send("Deleted Successfully");
    } else {
      res.status(500).send("Internal Server Error");
    }
  });
});
module.exports = router;
