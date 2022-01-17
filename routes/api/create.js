const express = require(`express`);  //express package imported
const router = express.Router(); //using express router module
const database = require("../../database/database"); //database module imported
var con = database.con; //database connector imported
const date = new Date();
let timestamp = date.toUTCString(); //getting current time
router.post(`/`,(req,res) =>{ //using post request for creating note
    const body = req.body;
    const title  = body.title;
    const description = body.description;
    const tag = body.tag;
    const id = req.query.id
  if(!title || !description || !id || !tag)
  {
    res.status(400).send("Information Missing")
  }
  else if(title.length <= 5)
  {
    res.status(400).send("Title length too short")
  }
  else if(description.length <= 10)
  {
    res.status(400).send("Description length too short")
  }
  else
  {
    con.query(
      `INSERT INTO notes (UserID, Title, Description, tag, Timestamp) VALUES ('${id}', '${title}', '${description}', '${tag}', '${timestamp}');`,
      function (err, result) {
        if (err) 
        {
          res.status(500).send("Internal Server Error");
        };
        res.send("Note Successfully created")
      }
    );
  }
})
module.exports = router;