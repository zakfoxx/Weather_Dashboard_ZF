var apiKey = "b06f6c7b10cb4150cdf88358e4b7eaed";
var searchButton = document.querySelector(".submit-button");
var citySearch = document.querySelector(".city-search");
var searchHistory = [];
var searchHistoryDiv = $("#history");
var forecastDiv = $(".five-day");
console.log("line six", searchHistoryDiv);
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
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
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
          console.log("line 56", data.current);
          saveStorage(targetCity);
          getStorage();
          loadWeather(data);
        });
    });
});

function loadWeather(weather) {
  //set today's weather
  $("#today-temp").text(weather.current.temp);
  $("#today-wind").text(weather.current.wind_speed);
  $("#today-humidity").text(weather.current.humidity);
  $("#today-UV").text(weather.current.uvi);
  // set 5 day forecast
  var forecast = weather.daily;
  console.log(forecast);
  forecastDiv.children().remove();
  for (let index = 0; index < 5; index++) {
    console.log(forecast[index]);
    var dayDiv = $("<div>")
      .addClass("cards pl-10")
      .attr("id", "day-" + (index + 1));

    var dateEl = $("<p>")
      .attr("id", "date")
      .text("day" + (index + 1));
    dayDiv.append(dateEl);

    var tempEl = $("<p>")
      .attr("id", "temp")
      .text("temp: " + forecast[index].temp.day);
    dayDiv.append(tempEl);

    var windEl = $("<p>")
      .attr("id", "wind")
      .text("wind: " + forecast[index].wind_speed);
    dayDiv.append(windEl);

    var humidityEl = $("<p>")
      .attr("id", "humidity")
      .text("humidity: " + forecast[index].humidity);
    dayDiv.append(humidityEl);

    forecastDiv.append(dayDiv);
  }
}
function saveStorage(targetCity) {
  console.log(targetCity, "line 66");
  searchHistory.push(targetCity);
  console.log(searchHistory, "line 67");
  // var cityHistory = JSON.parse(localStorage.getItem("history")) || [];
  // var city = citySearch;
  // if (searchHistory.includes(targetCity)) {
  //   console.log("city in storage");
  // } else {
  localStorage.setItem("cityStorage", searchHistory);
  // }
}

// figure out how to save as an array

// search .includes method - not saving to local storage

function getStorage() {
  searchHistory =
    localStorage.getItem("cityStorage") !== null
      ? localStorage.getItem("cityStorage")
      : [];
  searchHistory = searchHistory.split(",");
  console.log("searchHistory updated to", searchHistory);
  searchHistoryDiv.children().remove();
  for (let i = 0; i < searchHistory.length; i++) {
    const el = searchHistory[i];
    var button = document.createElement("button");
    button.textContent = el;
    console.log(el, searchHistory, "line 63");
    searchHistoryDiv.append(button);
  }
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
