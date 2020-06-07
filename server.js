const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const appRoute = require("./routes/app.route");
const taxRoute = require("./routes/tax.route");

const app = express();

//Serve static files from the Views folder
app.use(express.static('Views'));

//Enabling cors for test porpuses
app.use(cors());

//Get the envirement port or set it to 1234
const port = process.env.PORT || 1234;

//Use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Use routes
app.use(appRoute);
app.use(taxRoute);

//Listen on port
app.listen(port, function() {
  console.log("Server is running over ", port);
});
