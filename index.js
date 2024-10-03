function showCityWeather(event){
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.ariaValueMax;
}

let searchFormElement =  document.querySelector("#search-form");
searchFormElement.addEventListener("submit", showCityWeather);