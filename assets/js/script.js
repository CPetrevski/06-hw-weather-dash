const api = {
    key: "d2c001f843b504c2d5194e5eec62da6f",
    base: "https://api.openweathermap.org/data/2.5/"
};
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keypress", setQuery);
// Search Box function when Enter is pressed
function setQuery (event) {
    if (event.keyCode == 13) {
        getResults(searchBox.value);
        getFiveDay(searchBox.value);
    }
};

// Fetch fucntion for current day 
function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }) .then (displayResults);
}

// Fetch for API for future days
function getFiveDay (query) {
    fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then(list => {
            return list.json();
        })  .then (displayFiveDay)
}

// function for current day to display data
function displayResults (weather) {
    console.log(weather);
    
    let cityEl = document.querySelector(".location .city");
    cityEl.innerHTML = `${weather.name}, ${weather.sys.country}`
;   
    // Moment used for current day data.
    let dateEl = document.querySelector(".location .date");
    dateEl.innerHTML = moment().format("dddd/MM/YYYY");

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${weather.main.temp} <span>°C</span>`;

    let windEl = document.querySelector(".current .wind");
    windEl.innerHTML = `${weather.wind.speed} Mph`

    let weatherEl = document.querySelector(".current .weather");
    weatherEl.innerHTML = `${weather.weather[0].description}`.toUpperCase();

    let humidityEl = document.querySelector(".current .humidity");
    humidityEl.innerHTML = `${weather.main.humidity}`;

    if (weather.weather[0].main === "Clouds") {
        let dayIcon = document.querySelector(".dayIcon");
        let image = document.createElement("img");
        image.src = "assets/images/cloud.png"
        dayIcon.appendChild(image);
    } else if (weather.weather[0].main === "Rain") {
        let dayIcon = document.querySelector(".dayIcon");
        let image = document.createElement("img");
        image.src = "assets/images/rain.png";
        dayIcon.appendChild(image);
    } else if (weather.weather[0].main === "Clear") {
        let dayIcon = document.querySelector(".dayIcon");
        let image = document.createElement("img");
        image.src = "assets/images/sunny.png";
        dayIcon.appendChild(image);        
    } else if (weather.weather[0].main === "Snow") {
        let dayIcon = document.querySelector(".dayIcon");
        let image = document.createElement("img");
        image.src = "assets/images/snow.png";
        dayIcon.appendChild(image);
    } 
}

// function for 5 day display data.
function displayFiveDay (list) {
    console.log(list);

    let tempEl1 = document.querySelector(".cards .card1 .temp1");
    tempEl1.innerHTML = `${list.list[0].main.temp} <span>°C</span>`;    
    let tempEl2 = document.querySelector(".cards .card2 .temp2");
    tempEl2.innerHTML = `${list.list[1].main.temp} <span>°C</span>`;
    let tempEl3 = document.querySelector(".cards .card3 .temp3");
    tempEl3.innerHTML = `${list.list[2].main.temp} <span>°C</span>`;
    let tempEl4 = document.querySelector(".cards .card4 .temp4");
    tempEl4.innerHTML = `${list.list[3].main.temp} <span>°C</span>`;
    let tempEl5 = document.querySelector(".cards .card5 .temp5");
    tempEl5.innerHTML = `${list.list[4].main.temp} <span>°C</span>`;

    let windEl1 = document.querySelector(".cards .card1 .wind1");
    windEl1.innerHTML = `${list.list[0].wind.speed} Mph`;
    let windEl2 = document.querySelector(".cards .card2 .wind2");
    windEl2.innerHTML = `${list.list[1].wind.speed} Mph`;
    let windEl3 = document.querySelector(".cards .card3 .wind3");
    windEl3.innerHTML = `${list.list[2].wind.speed} Mph`;
    let windEl4 = document.querySelector(".cards .card4 .wind4");
    windEl4.innerHTML = `${list.list[3].wind.speed} Mph`;
    let windEl5 = document.querySelector(".cards .card5 .wind5");
    windEl5.innerHTML = `${list.list[4].wind.speed} Mph`;

    let weatherEl1 =  document.querySelector(".cards .card1 .weather1");
    weatherEl1.innerHTML = `${list.list[0].weather[0].description}`;
    let weatherEl2 =  document.querySelector(".cards .card2 .weather2");
    weatherEl2.innerHTML = `${list.list[1].weather[0].description}`;
    let weatherEl3 =  document.querySelector(".cards .card3 .weather3");
    weatherEl3.innerHTML = `${list.list[2].weather[0].description}`;
    let weatherEl4 =  document.querySelector(".cards .card4 .weather4");
    weatherEl4.innerHTML = `${list.list[3].weather[0].description}`;
    let weatherEl5 =  document.querySelector(".cards .card5 .weather5");
    weatherEl5.innerHTML = `${list.list[4].weather[0].description}`;

    let humidityEL1 = document.querySelector(".cards .card1 .humidity1");
    humidityEL1.innerHTML = `${list.list[0].main.humidity}`;
    let humidityEL2 = document.querySelector(".cards .card2 .humidity2");
    humidityEL2.innerHTML = `${list.list[1].main.humidity}`;
    let humidityEL3 = document.querySelector(".cards .card3 .humidity3");
    humidityEL3.innerHTML = `${list.list[2].main.humidity}`;
    let humidityEL4 = document.querySelector(".cards .card4 .humidity4");
    humidityEL4.innerHTML = `${list.list[3].main.humidity}`;
    let humidityEL5 = document.querySelector(".cards .card5 .humidity5");
    humidityEL5.innerHTML = `${list.list[4].main.humidity}`;

    let day1Icon = document.querySelector(".cards .card1 .day1Icon");
    let day2Icon = document.querySelector(".cards .card2 .day2Icon");
    let day3Icon = document.querySelector(".cards .card3 .day3Icon");
    let day4Icon = document.querySelector(".cards .card4 .day4Icon");
    let day5Icon = document.querySelector(".cards .card5 .day5Icon");

    if (list.list[0].weather[0].main === "Clouds") {
        let image = document.createElement("img");
        image.src = "assets/images/cloud.png"
        day1Icon.appendChild(image);
    } else if (list.list[0].weather[0].main === "Rain") {
        let image = document.createElement("img");
        image.src = "assets/images/rain.png"
        day1Icon.appendChild(image);
    } else if (list.list[0].weather[0].main === "Clear") {
        let image = document.createElement("img");
        image.src = "assets/images/sunny.png"
        day1Icon.appendChild(image);
    } else if (list.list[0].weather[0].main === "Snow") {
        let image = document.createElement("img");
        image.src = "assets/images/snow.png"
        day1Icon.appendChild(image);
    }

    if (list.list[1].weather[0].main === "Clouds") {
        let image = document.createElement("img");
        image.src = "assets/images/cloud.png"
        day2Icon.appendChild(image);
    } else if (list.list[1].weather[0].main === "Rain") {
        let image = document.createElement("img");
        image.src = "assets/images/rain.png"
        day2Icon.appendChild(image);
    } else if (list.list[1].weather[0].main === "Clear") {
        let image = document.createElement("img");
        image.src = "assets/images/sunny.png"
        day2Icon.appendChild(image);
    } else if (list.list[1].weather[0].main === "Snow") {
        let image = document.createElement("img");
        image.src = "assets/images/snow.png"
        day2Icon.appendChild(image);
    }

    if (list.list[2].weather[0].main === "Clouds") {
        let image = document.createElement("img");
        image.src = "assets/images/cloud.png"
        day3Icon.appendChild(image);
    } else if (list.list[2].weather[0].main === "Rain") {
        let image = document.createElement("img");
        image.src = "assets/images/rain.png"
        day3Icon.appendChild(image);
    } else if (list.list[2].weather[0].main === "Clear") {
        let image = document.createElement("img");
        image.src = "assets/images/sunny.png"
        day3Icon.appendChild(image);
    } else if (list.list[2].weather[0].main === "Snow") {
        let image = document.createElement("img");
        image.src = "assets/images/snow.png"
        day3Icon.appendChild(image);
    }

    if (list.list[3].weather[0].main === "Clouds") {
        let image = document.createElement("img");
        image.src = "assets/images/cloud.png"
        day4Icon.appendChild(image);
    } else if (list.list[3].weather[0].main === "Rain") {
        let image = document.createElement("img");
        image.src = "assets/images/rain.png"
        day4Icon.appendChild(image);
    } else if (list.list[3].weather[0].main === "Clear") {
        let image = document.createElement("img");
        image.src = "assets/images/sunny.png"
        day4Icon.appendChild(image);
    } else if (list.list[3].weather[0].main === "Snow") {
        let image = document.createElement("img");
        image.src = "assets/images/snow.png"
        day4Icon.appendChild(image);
    }

    if (list.list[4].weather[0].main === "Clouds") {
        let image = document.createElement("img");
        image.src = "assets/images/cloud.png"
        day5Icon.appendChild(image);
    } else if (list.list[4].weather[0].main === "Rain") {
        let image = document.createElement("img");
        image.src = "assets/images/rain.png"
        day5Icon.appendChild(image);
    } else if (list.list[4].weather[0].main === "Clear") {
        let image = document.createElement("img");
        image.src = "assets/images/sunny.png"
        day5Icon.appendChild(image);
    } else if (list.list[4].weather[0].main === "Snow") {
        let image = document.createElement("img");
        image.src = "assets/images/snow.png"
        day5Icon.appendChild(image);
    }

}
