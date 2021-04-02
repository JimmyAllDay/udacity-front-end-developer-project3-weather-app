// Setup empty JS array to act as endpoint for all routes
const projectData = [];

// testing with array

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

// Initialize all route with a callback function
app.get("/", function(req, res) {
  res.send(projectData);
});

// Callback function to complete GET '/all'

// Post Route
app.post("/", function(req, res) {
  res.send("POST received");
});

// Add data (based on movie example)
app.post("/addData", addData);

function addData(req, res) {
  console.log(req.body);
  projectData.push(req.body);
}
