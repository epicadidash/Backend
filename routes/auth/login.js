const express = require(`express`);
const router = express.Router();
const { body, validationResult } = require("express-validator");
var crypto = require("crypto");
const database = require("../../database");
const x = crypto 
  .createHash("sha512")
  .update("note-ashish-adwait-plus")
  .digest("hex");
var con = database.con;
router.post(`/`, body("email").isEmail(), (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send("invalid email");
  }
  if (!email || !password || !username) {
    res.status(400).send("information missing");
    exit.destroy();
  } else if (username.length <= 5) {
    res.status(400).send("username lenth too small");
    exit.destroy();
  } else if (password.length <= 8) {
    res.status(400).send("password length too small ");
    exit.destroy();
  } else {
    const y = crypto.createHash("sha512").update(password).digest("hex");
    const z = x + y;
    con.query(
      `SELECT * FROM users WHERE Email = '${email}';`,
      function (err, result) {
        if (err) throw err;
        if (result.length === 0) {
          res.send("No such user with this email found");
        } else {
          var t = result[0].Password === z;
          if (t === true) {
            res.json({
              userid: result[0].ID,
              Login: "Successful",
            });
          }
          if (t === false) {
            res.json({
              Login: "Unsuccessful, Wrong Username and Password combination",
            });
          }
        }
      }
    );
  }
});
module.exports = router;
