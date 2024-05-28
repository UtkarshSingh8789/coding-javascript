const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key="3bac93a13af967b210a83c0d21a530ac";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await fetch(`${url}`);
    const data=await weather_data.json();
    if(data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";//ye humlog isliye kyuki taaki jb error aaye to 404 wal picture show ho and cloud images nah ho;
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";//ye humlog isliye kiye taaki error nhi to 404 wala image nah aaye;
    weather_body.style.display = "flex";
    temperature.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
    description.innerHTML=`${data.weather[0].description}`
    humidity.innerHTML=`${data.main.humidity}%`
    wind_speed.innerHTML=`${data.wind.speed}Km/H`


    switch(data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/wheatherApp/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/wheatherApp/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/wheatherApp/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/wheatherApp/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/wheatherApp/assets/snow.png";
            break;

    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})