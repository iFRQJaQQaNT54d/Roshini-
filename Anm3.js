function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weather-info").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById("weather-info").innerHTML = "<p>City not found. Try again!</p>";
            }
        })
        .catch(error => console.error("Error fetching weather:", error));
}
