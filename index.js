function showTemperature(response){
    let temperature = document.querySelector("#weather-details-temp");
    let actualTemperature = Math.round(response.data.temperature.current);
    
    let cityElement = document.querySelector("#city");
    let currentCity = response.data.city;


    cityElement.innerHTML = currentCity;
    temperature.innerHTML = actualTemperature;
    
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