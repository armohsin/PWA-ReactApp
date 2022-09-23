import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";
import { FetchData } from "./API/fetch";
import './App.css'


const App =()=>{

  const [input, setinput]= useState('');
  const [weather,setweather]=useState({});
  const search =async (e)=>{
    if(e.key === 'Enter'){
      const data = await FetchData(input)

      setweather(data);
    
    }
  }

  return(
   <div className="main-container">
    <input type="text"  className="search" placeholder="Enter a City Name" value={input} onChange={(e)=>setinput(e.target.value)} onKeyPress={search}/>
    
    {weather.main &&(
      <div className="city">
        <h2 className="city-name">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        <div className="city-temp" >
          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </div>
        <div>
          <img className="city-icon"  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          <p>{weather.weather[0].description}</p>
        </div>
      </div>

    )}
   
   </div>
  )
}

export default App;
