function showTemperature(response){
    let temperature = document.querySelector("#weather-details-temp");
    let actualTemperature = `${Math.round(response.data.temperature.current)}℃`;
    
    let cityElement = document.querySelector("#city");
    let currentCity = response.data.city;

    let description = document.querySelector("#weather-details-description");
    let descriptionData = response.data.condition.description;

    let otherTemperature = document.querySelector("#weather-details-feelslike");
    let feelsLike = `${Math.round(response.data.temperature.feels_like)}℃`;

    let cityHumidity = document.querySelector("#weather-details-stats-humidity");
    let humidity = `${response.data.temperature.humidity}%`;

    let cityWind = document.querySelector("#weather-details-stats-wind");
    let wind = `${Math.round(response.data.wind.speed)}km/hr`;

    let cityTime = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    let weatherEmoji = document.querySelector("#emoji");
    let icon = `<img src="${response.data.condition.icon_url}" class="weather-details-emoji"/>`;


    temperature.innerHTML = actualTemperature;
    cityElement.innerHTML = currentCity;
    description.innerHTML = descriptionData;
    otherTemperature.innerHTML = feelsLike;
    cityHumidity.innerHTML = humidity;
    cityWind.innerHTML = wind;
    cityTime.innerHTML = displayDay(date);
    weatherEmoji.innerHTML = icon;
}

function displayDay(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function lookUpCity (city){
    let apiKey = "7f8c32d332f4bf01b7d20t129od1ca44";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}



function changeCity(event){
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");

    lookUpCity(searchInput.value);
}
let showCity = document.querySelector("#search-form");
showCity.addEventListener("submit", changeCity);

lookUpCity("Gaborone");
displayForecast();

function displayForecast(){
    let forecast =  document.querySelector("#forecast");

    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ];
    
    let forecastHtml ="";

    days.forEach[function(day){
        forecastHtml = `
        <div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-emoji">☀</div>
            <div class="weather-forecast-temperature">
               <span class="weather-forecast-temperature-high">20℃</span>|
               <span class="weather-forecast-temperature-low">10℃</span>
            </div>
        </div>

`;
    }]


    
}



/*                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Tue</div>
                    <div class="weather-forecast-emoji">☀</div>
                    <div class="weather-forecast-temperature">
                       <span class="weather-forecast-temperature-high">23℃</span>|
                       <span class="weather-forecast-temperature-low">9℃</span>
                    </div>
                </div>                
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Wed</div>
                    <div class="weather-forecast-emoji">☀</div>
                    <div class="weather-forecast-temperature">
                       <span class="weather-forecast-temperature-high">29℃</span>|
                       <span class="weather-forecast-temperature-low">15℃</span>
                    </div>
                </div>                
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Thur</div>
                    <div class="weather-forecast-emoji">☀</div>
                    <div class="weather-forecast-temperature">
                       <span class="weather-forecast-temperature-high">33℃</span>|
                       <span class="weather-forecast-temperature-low">13℃</span>
                    </div>
                </div>                
                <div class="weather-forecast-day">
                    <div class="weather-forecast-date">Fri</div>
                    <div class="weather-forecast-emoji">☀</div>
                    <div class="weather-forecast-temperature">
                       <span class="weather-forecast-temperature-high">38℃</span>|
                       <span class="weather-forecast-temperature-low">15℃</span>
                    </div>
                </div>
*/