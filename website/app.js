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

// Get user feelings input
async function getFeelings() {
  feelingsValue = feelings.value;
}

// POST Route
const postData = async (url = "", data = {}) => {
  console.log(data);

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

const getTemp = async () => {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
      zip.value +
      ",us&appid=" +
      apiKey
  )
    .then(res => res.json())
    .then(data => {
      tempValue = data["main"]["temp"];
    })
    .catch(err =>
      alert("incorrect zip code. Please enter a zip code from within the USA")
    );
  try {
    getFeelings().then(
      postData("/addData", {
        feelings: feelingsValue,
        temp: tempValue,
        date: newDate
      })
    );
  } catch (error) {
    // appropriately handle the error
    console.log("error", error);
  }
};

// ---------------------------THIS FUNCTION IS NOT RETURNING MY DATA -------------------

const updateUI = async () => {
  const request = await fetch("/");
  try {
    const allData = await request;
    console.log(allData);
    document.getElementById("date").innerText = allData[0];
    // document.getElementById('temp').innerHTML = allData[0].temp;
    // document.getElementById('content').innerHTML = allData[0].feelings;
  } catch (error) {
    console.log("error", error);
  }
};

// Clickhandler for generate button
generateButton.addEventListener("click", async () => {
  getTemp();

  setTimeout(function() {
    updateUI();
  }, 2000);
});
