const key = "1aec9cf7015128ce86e7b4b7f4dc2ffb";
function onGeoOk(position) {
    
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
    const pollutionUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${key}`
    fetch(pollutionUrl)
        .then(response => response.json())
        .then(data => {
            const pollutionContainer = document.querySelector("#weather span:last-child");
            const aqi = data.list[0].main.aqi 
            switch(aqi) {
                case 1 : 
                    pollutionContainer.innerText = "Good"; 
                    break;
                case 2 : 
                    pollutionContainer.innerText = "Fair"; 
                    break;
                case 3 : 
                    pollutionContainer.innerText = "Moderate"; 
                    break;
                case 4 : 
                    pollutionContainer.innerText = "Poor"; 
                    break;
                case 5 : 
                    pollutionContainer.innerText = "Very Poor"; 
                    break;
            }
    });
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherContain = document.querySelector("#weather span:first-child");
            const tempContain = document.querySelector("#weather span:nth-child(2)");
            const cityContain = document.querySelector("#weather span:nth-child(3)");

            weatherContain.innerText = data.weather[0].main;
            cityContain.innerText = data.name;
            tempContain.innerText = data.main.temp;
        });
    // console.log(url);

}

function onGeoError() {
    alert("Cant find you. No weather for you. :(")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);