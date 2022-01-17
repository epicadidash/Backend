const express = require(`express`); //express package imported
const router = express.Router(); //using express router module
const database = require("../../database/database"); //database module imported
var con = database.con; //database connector imported
const date = new Date();
let timestamp = date.toUTCString(); //getting current time
router.put(`/`, (req, res) => { //using put request for update note
  const body = req.body;
  const title = body.title;
  const description = body.description;
  const tag = body.tag;
  const id = req.query.id;
  if (!title || !description || !id || !tag) {
    res.status(400).send("Information Missing");
  } else if (title.length <= 5) {
    res.status(400).send("Title length too short");
  } else if (description.length <= 10) {
    res.status(400).send("Description length too short");
  } else {
    con.query(
      `UPDATE notes SET Title = '${title}', Description = '${description}', tag = '${tag}', Timestamp = '${timestamp}' WHERE ID = '${id}' ;`,
      function (err, result) {
        if (err) {
          throw err;
          res.status(500).send("Internal Server Error");
        }
        res.send("Note successfully updated");
      }
    );
  }
});
module.exports = router;
