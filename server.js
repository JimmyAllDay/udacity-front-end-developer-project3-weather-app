// Setup empty JS array to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening() {
  console.log("server running");
  console.log(`running on local host: ${port}`);
}

// Add data to project end-point
app.post("/addData", addData);

function addData(req, res) {
  newEntry = {
    feelings: req.body.feelings,
    temp: req.body.temp,
    date: req.body.date
  };

  projectData = req.body;
}

// Callback function to complete GET '/fetchData'
app.get("/fetchData", function(req, res) {
  res.send(projectData);
});
