//  INPUT UTENTE
async function getWeather() {
    // Variabili HTML
    const cityInput = document.getElementById('cityInput').value;
    const weatherResults = document.getElementById('weatherResults');
    const lang = navigator.language
    //API
    const apiKey = "725ac14572aba4fa0023c2beccf4eb68"
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&lang=${lang}`;
   

    fetch(api)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        
        //  location
        const cityName = data.name;
        const country = data.sys.country
        // sun time
        const sunriseStamp = data.sys.sunrise *1000;
        const sunriseDate = new Date(sunriseStamp);
        const sunriseHour = sunriseDate.getHours();
        const sunriseMinutes = sunriseDate.getMinutes();

        const sunsetStamp = data.sys.sunset * 1000;
        const sunsetDate = new Date(sunsetStamp);
        const sunsetHour = sunsetDate.getHours();
        const sunsetMinutes = sunsetDate.getMinutes();
        // temperature
        const tempFelt = Math.round((data.main.feels_like)-273.15);
        const tempCurrent = Math.round((data.main.temp)-273.15);
        const tempMin = Math.round((data.main.temp_min)-273,15);
        const tempMax = Math.round((data.main.temp_max)-273.15);
        // water
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const visibility = data.visibility / 1000;
        // weather
        const weather = data.weather[0].main;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        // wind
        const wDeg = data.wind.deg;
        const wGust = data.wind.gust;
        const wSpeed = data.wind.speed;

        weatherResults.innerHTML = 
        `
        <div class="container">
            <div class="card border-primary my-1 mx-1 p-2" id="card1">
                <div class="text-center">
                    <div>
                        <h2>${cityName}, ${country}</h2>
                    </div>
                    <h2>${weather}</h2>
                    <div>
                        <img src="http://openweathermap.org/img/w/${icon}.png"> 
                    </div>
                    <h5>${description}</h5>
                </div>
            </div>
            <div class="card border-primary my-1 mx-1 p-2">
                <div class="text-center">
                    <h3>${tempFelt}°</h3> 
                    <p>Perceived temperature</p>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <h5>${tempMin}°</h5>
                        <p>Minimum temperature</p>
                    </div>
                    <div class="col text-center">
                        <h5>${tempMax}°</h5>
                        <p>Maximum temperature</p>    
                    </div>
                    <div class="col text-center">
                        <h5>${tempCurrent}°</h5>
                        <p>Current Temperature</p>    
                    </div>
                </div>
            </div>
            <div class="card border-primary my-1 mx-1 p-2">
                <div class="row text-center mx-5">
                    <div class="col">
                        <h5>Sunrise</h5>
                        <p>${sunriseHour}: ${sunriseMinutes}</p>
                    </div>
                    <div class="col">
                        <h5>Sunset</h5>
                        <p>${sunsetHour}: ${sunsetMinutes}</p>
                    </div>  
                </div>
                <div class="row text-center">
                    <div class="col">
                        <h5>Pressure</h5>
                        <p>${pressure} hPa</p>
                    </div>
                    <div class="col">
                        <h5>Humidity</h5>
                        <p>${humidity}%</p>
                    </div>
                    <div class="col">
                        <h5>Visibility</h5>
                        <p>${visibility}km</p>
                    </div>
                </div>
            </div>
            <div class="card border-primary my-1 mt-1 mb-3 p-2">
                <div class="row text-center">
                    <div class="col">
                        <h5>${wDeg}°</h5>
                        <p>Wind Degree</p>
                    </div>
                    <div class="col">
                        <h5>${wGust} m/s</h5>
                        <p>Wind Gust</p>
                    </div>
                    <div class="col">
                        <h5>${wSpeed} m/s</h5>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
        <footer class="bg-dark">
            <div class="text-center mt-2">
                <p class="text-white mt-2">Made by <a href="https://github.com/Nicolo3487" class="text-white link-offset-2 link-underline link-underline-opacity-0 ">Nicolo3487</a></p>
                <a href="https://epicode.com/it/" class="text-white link-offset-2 link-underline link-underline-opacity-0"><b>©EPICODE</b></a> 
            </div>
        </footer>
        `
    })
}
    

  
   

 

   







