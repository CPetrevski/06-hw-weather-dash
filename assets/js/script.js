const api = {
    key: "d2c001f843b504c2d5194e5eec62da6f",
    base: "https://api.openweathermap.org/data/2.5/"
};
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keypress", setQuery);

function setQuery (event) {
    if (event.keyCode == 13) {
        getResults(searchBox.value);
        getFiveDay(searchBox.value);
    }
};

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }) .then (displayResults);
}

function getFiveDay (query) {
    fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then(list => {
            return list.json();
        })  .then (displayFiveDay)
}

function displayResults (weather) {
    console.log(weather);
    
    let cityEl = document.querySelector(".location .city");
    cityEl.innerHTML = `${weather.name}, ${weather.sys.country}`
;
    let dateEl = document.querySelector(".location .date");
    dateEl.innerHTML = moment().format("dddd/MM/YYYY");

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${weather.main.temp} <span>°C</span>`;

    let windEl = document.querySelector(".current .wind");
    windEl.innerHTML = `${weather.wind.speed} mph`

    let weatherEl = document.querySelector(".current .weather");
    weatherEl.innerHTML = `${weather.weather[0].description}`.toUpperCase();

    let humidityEl = document.querySelector(".current .humidity");
    humidityEl.innerHTML = `${weather.main.humidity}`;
}

function displayFiveDay (list) {
    console.log(list);

    let tempEl1 = document.querySelector(".cards .card1 .temp1");
    tempEl1.innerHTML = `${forecastData.main.temp}`;
}
