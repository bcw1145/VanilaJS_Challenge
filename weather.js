const weather= document.querySelector(".js-weather");
const weatherh2= weather.querySelector("h2");

const API_KEY="38f44a7f5a553af6fa3bb6d11771a016";
const COORDS="coords";

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temparature=json.main.temp;
        const place= json.name;
        weatherh2.innerText=`${temparature} @ ${place}`;
    })
}

function saveCoords(obj){
    localStorage.setItem(COORDS,JSON.stringify(obj));
}

function handleGeoSuccess(position){
    const latitude= position.coords.latitude;
    const longitude= position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadWeather(){
    const loadedWeather= localStorage.getItem(COORDS);
    if(loadedWeather===null){
        askForCoords();
    }else{
        const parseCoords=JSON.parse(loadedWeather);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadWeather();
}

init();