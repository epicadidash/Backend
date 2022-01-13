const express = require(`express`); //express package imported
const database = require(`./database.js`); //database connector imported
const app = express(); // express function used
const port = 5000; // port specified
var cors = require(`cors`); // cors package imported
app.use(cors()); //used cors
app.use(express.json()); //used json
//Declaring Routes
app.use(`/api/authentication`, require(`./routes/auth/signup`)); //authenication route
//app.use(`/api/authenication`, require(`./routes/note`)); //note route
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); //app starts listening on port specified
});