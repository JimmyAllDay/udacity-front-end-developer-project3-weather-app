/* Global Variables */
let zip = document.getElementById("zip");
let zipValue = "";
let feelings = document.getElementById("feelings");
let feelingsValue = "";
const generateButton = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

generateButton.addEventListener("click", function() {
  console.log("button clicked");
  zipValue = zip.value;
  console.log(zipValue);
  feelingsValue = feelings.value;
  console.log(feelingsValue);
  console.log(newDate);
});

const postData = async (url = "", data = {}) => {
  console.log(data);

  //   Not sure what this is yet
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data)
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

generateButton.addEventListener("click", function() {
  if (zipValue && feelingsValue) {
    postData("/addData", {
      zip: zipValue,
      feelings: feelingsValue,
      date: newDate
    });
  }
});

// ------------------------ Open Weather Map async functions ------------------------------------------
// Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
const apiKey = "4c2fca6a71d87924df1ea43ade5f444d";
const baseURL =
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=";
const newZip = zipValue;
console.log(baseURL + apiKey);

// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
const getWeather = async (baseURL, apiKey) => {
  const res = await fetch(baseURL + apiKey);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
    // TODO: update error handling to appropriately handle the error
  }
};

// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
document.getElementById("generate").addEventListener("click", performAction);

// Inside that callback function call your async GET request with the parameters:
// base url
// user entered zip code (see input in html with id zip)
// personal API key
function performAction(e) {
  getWeather(baseURL, newZip, apiKey);
}
