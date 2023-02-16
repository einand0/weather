const body = document.querySelector('body');
const cityName = document.querySelector('#city-name');
const cityCountry = document.querySelector('#city-country');
const weatherValue = document.querySelector('#city-weather');
const searchBtn = document.querySelector('#button-search');
const weatherDescription = document.querySelector('#weather-description');
const input = document.querySelector('#city-input');
var celsiusTemperature = 0;


const updateScreen = (data) => {

    if(data.weather[0].main === "Clouds"){
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)";
    } else if(data.weather[0].main === "Clear"){
        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"
    }

    input.value = "";

    celsiusTemperature = Math.floor(data.main.temp - 273,15);
    fahreTemperature = Math.floor(data.main.temp - 273,15) * 9/5 + 32;

    cityName.textContent = data.name;
    cityCountry.textContent = data.sys.country;
    weatherValue.textContent = `${celsiusTemperature}ºC`;
    weatherDescription.textContent = data.weather[0].description;
}

const getCity = async () => {

    const city = input.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&APPID=f6e9729e4246991348e8386344d9973e`);
    const data = await response.json();

    updateScreen(data);

    console.log(data);
    console.log(data.main.temp);
    console.log(data.name);
    console.log(data.sys.country);
    console.log(data.weather[0].description);
}

searchBtn.addEventListener('click', getCity);


(async function getCity(){

    const city = "London";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&APPID=f6e9729e4246991348e8386344d9973e`);
    const data = await response.json();

    updateScreen(data);

    console.log(data);
    console.log(data.main.temp);
    console.log(data.name);
    console.log(data.sys.country);
    console.log(data.weather[0].description);
}());



