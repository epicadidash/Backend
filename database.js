var mysql = require('mysql');

var connector = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  db:"note-plus"
});
module.exports =
{
    "con":connector
}