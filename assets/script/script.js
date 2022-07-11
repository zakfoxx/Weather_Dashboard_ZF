var apiKey = "b06f6c7b10cb4150cdf88358e4b7eaed";

function apiCall() {
  var lat;
  var lon;
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

// get api key working
// lookup lat and lon for durham on google.maps - set lines 4 and 5 to durham
// google openweather api for city lookup - use syntax from line 6 for specific call - should give input for city name's lat and lon
// define lat/lon variables for city's data
// copy/paste line 14 to run new city to lookup lat/lon weather
// save to localStorage and display on HTML - display weather for city lookup and 5 day forecast

