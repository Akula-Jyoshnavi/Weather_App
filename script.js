let cityname=document.querySelector(".search-bar input");
let search=document.querySelector(".search-bar button");
let weatherimg=document.querySelector(".show-weather-img");
// require('.env').config()
 const urllink="https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}&units=metric&q=";

async function getweather(location){
    const response=await fetch(urllink+location);
    if(response.status == 404)
    {
        document.querySelector(".error-msg").classList.remove("hide-error");
        document.querySelector(".hide").classList.add("hide");
    }else{
    let  info= await response.json();
    document.querySelector(".city").innerText=info.name;
    document.querySelector(".temp").innerText=Math.round(info.main.temp)+"°C";
    document.querySelector(".humid").innerText=info.main.humidity+"%";
    document.querySelector(".wind").innerText=info.wind.speed+"km/h";
    let update=info.weather[0].main;
    weatherimg.src=`./images/${update}.png`;
    document.querySelector(".hide").classList.remove("hide");
    document.querySelector(".error-msg").classList.add("hide-error");}
}

search.addEventListener("click",()=>{
    getweather(cityname.value);
})























































const api="585419b86460489b07f1f9431d74222e";
const url="https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric";