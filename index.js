function changeCity(event){
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
    let cityElement = document.querySelector("#city");
    let currentCity = searchInput.value;
    cityElement.innerHTML = currentCity;
}
let showCity = document.querySelector("#search-form");
showCity.addEventListener("submit", changeCity);