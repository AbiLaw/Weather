


function refreshWeather(response){
    let temperatureElement= document.querySelector (`#temp`)
    let temp = response.data.temperature.current;
 let cityElement = document.querySelector(`#city`);
 cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temp);
}


function searchCity(city){
let apiKey = "3ae4fbd5aec02f8bf63o3f22ta2b0b5c";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit (event){
    event.preventDefault ();
    let searchInput = document.querySelector ("#search-form-input");
  
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");