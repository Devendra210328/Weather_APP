const apiKey = "8a794f6cdda9a3ef93f4500078d2e626";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".windspeed");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(cityName) {
    const URL = apiURL + cityName + `&appid=${apiKey}`;
    const response = await fetch(URL);
    const data = await response.json();

    city.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "°C";
    humidity.innerText = data.main.humidity + "%";
    windspeed.innerText = data.wind.speed + "km/h";
    let imgSrc = `images/${data.weather[0].main.toLowerCase()}.png`;
    weatherIcon.src = imgSrc;
}

searchBtn.addEventListener("click", () => {
    if(searchBox.value === "") {
        searchBox.value = "Nagaur";
    }
    checkWeather(searchBox.value);
});

window.addEventListener("load", () => {
    checkWeather("Nagaur");
})