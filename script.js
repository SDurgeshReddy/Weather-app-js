
const apiKey = "48806a095eb2057cca63f32be1947e55";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0] == "Clear"){
            weatherIcon.src == "images/clear.png";
        }else if(data.weather[0].main == "drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "mist"){
            weatherIcon.src ="images/mist.png";
        }else if(data.weather[0].main == "rain"){
            weatherIcon.src = "images/rain.png";
        }else{
            weatherIcon.src = "images/snow.png"
        }
        
        document.querySelector(".weather").style.display = "block";
    }
    var data = await response.json();
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})