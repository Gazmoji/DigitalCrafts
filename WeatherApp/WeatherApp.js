const cityTextBox = document.getElementById("cityTextBox");
const searchButton = document.getElementById("searchButton");
const weatherList = document.getElementById("weatherList");
const locationButton = document.getElementById("locationButton");
const secondList = document.getElementById("secondList");

function getWeather() {
  let location = cityTextBox.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=feeb1e15933c3850daf212f6801a413c&units=metric`
  )
    .then((response) => response.json())
    .then((information) => {
      const listWeather = `<li>
        <p>City Name: ${information.name}</p>
        <p>Main Temp: ${information.main.temp}</p>
        <p>Minimium Temp: ${information.main.temp_min}</p>
        <p>Maximum Temp: ${information.main.temp_max}</p>
        <p>Area Pressure: ${information.main.pressure}</p>
        </li>`;
      weatherList.innerHTML = listWeather;
    });
}

searchButton.addEventListener("click", function () {
  getWeather();
});

function autoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=feeb1e15933c3850daf212f6801a413c&units=metric`
      )
        .then((response) => response.json())
        .then((information) => {
          const listWeather = `<li>
            <p>City Name: ${information.name}</p>
            <p>Main Temp: ${information.main.temp}</p>
            <p>Minimium Temp: ${information.main.temp_min}</p>
            <p>Maximum Temp: ${information.main.temp_max}</p>
            <p>Area Pressure: ${information.main.pressure}</p>
            </li>`;
          secondList.innerHTML = listWeather;
        });
    });
  }
}

locationButton.addEventListener("click", function () {
  autoLocation();
});
