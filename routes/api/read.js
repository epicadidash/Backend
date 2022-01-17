const express = require(`express`);
const router = express.Router();
const database = require("../../database/database");
var con = database.con; 
router.get(`/`,(req,res)=>
{
    const id = req.query.id
    if(!id)
    {
        res.status(400).send("Information Missing")
    }
    else 
    {
        con.query(
            `SELECT ID, Title, Description, tag, Timestamp FROM notes WHERE UserID = '${id}';`,
            function (err, result) {
            if (err) 
            {throw err;
            }
      else if(result.length>0)
    {
        res.send(result)
    }
    else if(result.length === 0)
    {
        res.json({warning:"no notes created by the user"})
    }
    else
    {
        res.status(500).send("Internal Server Error")
    }
})
    }
})
module.exports = router;