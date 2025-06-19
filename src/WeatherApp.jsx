import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

  const [weatherinfo , setWeatherinfo] = useState({
    city:"Bengaluru",
    feelsLike: 22.01,
    humidity: 81,
    temp: 21.67,
    tempMax: 21.67,
    tempMin: 21.67,
    weather: "overcast clouds",
  });


  let updateInfo = (newInfo)=>{
    setWeatherinfo(newInfo);
  }

  return(
    <div style={{textAlign:"center"}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo = {updateInfo}/>
      <br></br>
      <InfoBox info = {weatherinfo}/>
    </div>
  );
}