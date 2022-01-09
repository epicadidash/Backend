var mysql = require('mysql');

var connector = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database:"note-plus"
});
module.exports =
{
    "con":connector
}