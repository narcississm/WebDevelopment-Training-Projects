const apiKey = "YOUR_API_KEY"; // OpenWeatherMap API Key

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return alert("Lütfen bir şehir girin.");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("weatherResult").innerHTML = "Şehir bulunamadı.";
                return;
            }
            const { main, weather, name } = data;
            document.getElementById("weatherResult").innerHTML = `
        <h2>${name}</h2>
        <p>${weather[0].description}</p>
        <p>Sıcaklık: ${main.temp}°C</p>
        <p>Nem: ${main.humidity}%</p>
      `;
        })
        .catch(() => {
            document.getElementById("weatherResult").innerHTML = "Hava durumu alınamadı.";
        });
}