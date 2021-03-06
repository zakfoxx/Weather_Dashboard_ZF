var apiKey = "b06f6c7b10cb4150cdf88358e4b7eaed";
var searchButton = document.querySelector(".submit-button");
var citySearch = document.querySelector(".city-search");
var searchHistory = [];

function apiCall() {
  var lat = data[0];
  var lon = "";
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&appid=" +
    apiKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
searchButton.addEventListener("click", function () {
  console.log(citySearch.value);
  var targetCity = citySearch.value;
  var citySearchUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    citySearch.value +
    "&appid=" +
    apiKey;
  fetch(citySearchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data[0].lat);
      console.log(data[0].lon);
      var lat = data[0].lat;
      var lon = data[0].lon;
      var requestUrl =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial&appid=" +
        apiKey;

      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("line 53", data);
          searchHistory.push(targetCity);
          saveStorage(targetCity);
        });
    });
});

function saveStorage(targetCity) {
  console.log(targetCity);
  if (searchHistory.includes(targetCity)) {
    console.log("city in storage");
  } else {
    localStorage.setItem("cityStorage", JSON.stringify(searchHistory));
  }
}

// search .includes method - not saving to local storage

function getStorage() {
  searchHistory = JSON.parse(localStorage.getItem("cityStorage"));
  console.log("searchHistory updated to", searchHistory);
}
getStorage();

// http://api.openweathermap.org/geo/1.0/direct?q={searchCity.value},{state code},{country code}&limit={limit}&appid={API key}

// google openweather api for city lookup - use syntax from line 6 for specific call - should give input for city name's lat and lon
// define lat/lon variables for city's data
// copy/paste line 14 to run new city to lookup lat/lon weather
// save to localStorage and display on HTML - display weather for city lookup and 5 day forecast

// create html elements displaying weather data -

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
