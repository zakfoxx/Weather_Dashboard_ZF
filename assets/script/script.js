var apiKey = "b06f6c7b10cb4150cdf88358e4b7eaed";
var searchButton = document.querySelector(".submit-button");
var citySearch = document.querySelector(".city-search");
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
          console.log(data);
        });
    });
});

// http://api.openweathermap.org/geo/1.0/direct?q={searchCity.value},{state code},{country code}&limit={limit}&appid={API key}

// google openweather api for city lookup - use syntax from line 6 for specific call - should give input for city name's lat and lon
// define lat/lon variables for city's data
// copy/paste line 14 to run new city to lookup lat/lon weather
// save to localStorage and display on HTML - display weather for city lookup and 5 day forecast
