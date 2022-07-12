var apiKey = "b06f6c7b10cb4150cdf88358e4b7eaed";

function apiCall() {
  var lat = "36";
  var lon = "-78";
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
apiCall();

// google openweather api for city lookup - use syntax from line 6 for specific call - should give input for city name's lat and lon
// define lat/lon variables for city's data
// copy/paste line 14 to run new city to lookup lat/lon weather
// save to localStorage and display on HTML - display weather for city lookup and 5 day forecast
