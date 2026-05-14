const apiKey = "YOUR_API_KEY";

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  // Current Weather
  fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey})
    .then(response => response.json())
    .then(data => {
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
      document.getElementById("description").innerText = data.weather[0].description;
      document.getElementById("humidity").innerText = data.main.humidity;
      document.getElementById("wind").innerText = data.wind.speed;
    });

  // 5 Day Forecast
  fetch(https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey})
    .then(response => response.json())
    .then(data => {
      const forecastDiv = document.getElementById("forecast");
      forecastDiv.innerHTML = "";

      for (let i = 0; i < data.list.length; i += 8) {
        const day = data.list[i];

        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: 'short' });

        const forecastItem = `
          <div class="forecast-item">
            <h4>${dayName}</h4>
            <p>${Math.round(day.main.temp)}°C</p>
            <p>${day.weather[0].main}</p>
          </div>
        `;

        forecastDiv.innerHTML += forecastItem;
      }
    });
}