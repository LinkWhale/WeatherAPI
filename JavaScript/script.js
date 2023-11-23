//fetch the api data from specified longitude and latitude with a unique API key
fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.23705&lon=17.98192&appid=cb99254c58061e7a36962034a20e9add")
.then(API => API.json())
.then(data => test(data))


//function putting all the data needed into the approprieate elements 
function test(data) {
    document.getElementById("img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; //choose the current weather img id
    document.getElementById("temp").innerHTML = Math.floor(data.main.temp - 273.15) + "&degC"; //convert Kelvin into Celsius
    document.getElementById("max_temp").innerHTML = `Max: ${Math.floor(data.main.temp_max - 273.15)}&degC`;
    document.getElementById("location").innerHTML = data.name;
    document.getElementById("min_temp").innerHTML = `Min: ${Math.floor(data.main.temp_min - 273.15)}&degC`;
    document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}`;
    document.getElementById("wind").innerHTML = `Wind speed: ${Math.floor(data.wind.speed*60*60/1000)}km/h`; //convert m/s to km/h
    console.log(data); //prints out the json file in console for ease of access
}