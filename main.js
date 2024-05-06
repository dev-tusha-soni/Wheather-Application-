const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const temp = document.querySelector("#temp");
const windSpeed = document.querySelector("#wind");
const humid = document.querySelector("#humid");
const weatherType = document.querySelector('#weather-type');
const appBody = document.querySelector('#appbody');

const getWeatherData = ()=>{
        const apiKey = 'e2f4f784a846274eae643a89ba928c37';
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value.trim()}&units=metric&appid=${apiKey}`;

        async function weatherJson() {
            const response = await fetch(apiURL);
            const data = await response.json();
            console.log(data);
            
            temp.innerHTML = data.main.temp;
            windSpeed.innerHTML = data.wind.speed;
            humid.innerHTML = data.main.humidity;
            weatherType.innerHTML = data.weather[0].main;

            if(data.weather[0].main === 'Haze'){
                 appBody.style.backgroundImage = 'url("https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
             }
        }
        
        weatherJson()
        
}