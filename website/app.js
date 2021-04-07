/* Global Variables */
let zip = document.getElementById("zip");
let feelings = document.getElementById("feelings");
let feelingsValue = "";
const generateButton = document.getElementById("generate");
const apiKey = "4c2fca6a71d87924df1ea43ade5f444d";
let tempValue = "";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Fetch data from api based on user input
generateButton.addEventListener("click", function() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
      zip.value +
      ",us&appid=" +
      apiKey
  )
    .then(res => res.json())
    .then(data => {
      tempValue = data["main"]["temp"];
    })
    .then(console.log(tempValue))
    .catch(err => alert("there's an error"));
});

// Send an object to the node server containing the response from the api, the date and the user input from the 'feelings' field
// Store the object in a variable in the node server
// Retrieve the object from the node server and display this in the relevant field in the app

// const postData = async (url = "", data = {}) => {
//   console.log(data);

//   //   Not sure what this is yet
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     // Body data type must match "Content-Type" header
//     body: JSON.stringify(data)
//   });

//   try {
//     const newData = await response.json();
//     console.log(newData);
//     return newData;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// generateButton.addEventListener("click", function() {
//   if (zipValue && feelingsValue) {
//     postData("/addData", {
//       zip: zipValue,
//       feelings: feelingsValue,
//       date: newDate
//     });
//   }
// });

// // ------------------------ Open Weather Map async functions ------------------------------------------
// // Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.

// generateButton.addEventListener("click", function() {
//   console.log(zipValue);
//   console.log(baseURL);
// });

// // Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
// const getWeather = async baseURL => {
//   const res = await fetch(baseURL);
//   try {
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("error", error);
//     // TODO: update error handling to appropriately handle the error
//   }
// };
