const express = require(`express`);
const router = express.Router();
const database = require("../../database/database");
var con = database.con;
const date = new Date();
let timestamp = date.toUTCString();
router.put(`/`,(req,res)=>
{
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
            `UPDATE notes SET Title = '${title}', Description = '${description}', tag = '${tag}', Timestamp = '${timestamp}' WHERE ID = '${id}' ;`,
            function (err, result) {
              if (err) 
              {
                  throw err
                res.status(500).send("Internal Server Error");
              };
              res.send("Note successfully updated")
            }
          );
    }
})
module.exports = router;