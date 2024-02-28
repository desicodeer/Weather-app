const apiKey = "9faa678c2b0c093db16d2636f19a5141";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
 const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 let data = await response.json();


 document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
 document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
 document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})