const express = require(`express`); //express package imported
const router = express.Router(); //using express router module
const database = require("../../database/database"); //database module imported
var con = database.con; //database connector imported
router.get(`/`, (req, res) => { //using get request for reading note
  const id = req.query.id;
  if (!id) {
    res.status(400).send("Information Missing");
  } else {
    con.query(
      `SELECT ID, Title, Description, tag, Timestamp FROM notes WHERE UserID = '${id}';`,
      function (err, result) {
        if (err) {
          throw err;
        } else if (result.length > 0) {
          res.send(result);
        } else if (result.length === 0) {
          res.json({ warning: "no notes created by the user" });
        } else {
          res.status(500).send("Internal Server Error");
        }
      }
    );
  }
});
module.exports = router;
