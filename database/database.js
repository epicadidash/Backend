var mysql = require("mysql"); //mysql package imported

var connector = mysql.createConnection({ //mysql connector
  host: "db4free.net",
  user: "rootadwait",
  password: "6XAPEU6ky6XDsdi",
  database: "noteplus",
});
module.exports = { //export connector module
  con: connector,
};