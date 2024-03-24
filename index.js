let btn=document.querySelector("button");
let input=document.querySelector("input");
let temp=document.querySelector("#temp");
let city=document.querySelector("#city");
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
let img=document.querySelector(".weather-icon");
let cityname="";
let apiKey="c6891ac6069544eabc885244242303"  
async function weather(){
    cityname=input.value;
    let url=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityname}`
    let response=await fetch(url);
    if(response.status==400){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        let data1=await response.json();
        temp.innerHTML=Math.round(data1.current.temp_c) + " °c";
        humidity.innerHTML=data1.current.humidity +"%";
        wind.innerHTML=data1.current.wind_kph +"km/hr";
        city.innerHTML=cityname;
        console.log(data1);
        console.log(data1.current.condition.text);
        if(data1.current.condition.text=="rain"){
           img.src="weather-app-img/images/rain.png"
        }
       else if(data1.current.condition.text=="Clouds"){
           img.src="weather-app-img/images/clouds.png"
        }
       else if(data1.current.condition.text=="Clear"){
           img.src="weather-app-img/images/clear.png"
        }
        else if(data1.current.condition.text=="Sunny"){
           img.src="weather-app-img/images/humidity.png"
        }
        else if(data1.current.condition.text=="Drizzle"){
           img.src="weather-app-img/images/drizzle.png"
        }
        else if(data1.current.condition.text=="Mist"){
           img.src="weather-app-img/images/mist.png"
        }
        else if(data1.current.condition.text=="Snow"){
           img.src="weather-app-img/images/snow.png"
        }
        
          document.querySelector(".weather").style.display="block";
          document.querySelector(".error").style.display="none";
    }
   
}
btn.addEventListener('click',()=>{
    weather();
})