let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

function getTemperature(response) {
  let weather = document.querySelector("#currentTemp");
  let temperature = Math.round(response.data.main.temp);
  let highLow = document.querySelector("#highLow");
  let high = Math.round(response.data.main.temp_max);
  let low = Math.round(response.data.main.temp_min);
  weather.innerHTML = `${temperature}° F`;
  highLow.innerHTML = `${high}°/${low}° F`;
}

function displayLocation(event) {
  event.preventDefault();
  let locationInput = document.querySelector("#test");
  let currentLocation = document.querySelector("#locale");
  currentLocation.innerHTML = `${locationInput.value}`;
  let apiKey = "4a89eb9a057b7d42b2048718c9361f4a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(getTemperature);
}

if (minute < 10) {
  minute = `0${minute}`;
}

let dateTime = document.querySelector("#date");
dateTime.innerHTML = `${day} ${hour}:${minute}`;

let form = document.querySelector("#searchEngine");
form.addEventListener("submit", displayLocation);
