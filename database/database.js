var mysql = require("mysql"); //mysql package imported

var connector = mysql.createConnection({ //mysql connector
  host: "localhost",
  user: "root",
  password: "12345",
  database: "note-plus",
});
module.exports = { //export connector module
  con: connector,
};
