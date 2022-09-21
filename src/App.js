import React, { useState } from "react";
import { FetchData } from "./API/fetch";
import './App.css'


const App =()=>{

  const [input, setinput]= useState('');

  const search =async (e)=>{
    if(e.key === 'Enter'){
      const data = await FetchData(input)

      console.log(data)
    }
  }

  return(
   <div className="main-container">
    <input
    type="text"
    className="search"
    placeholder="Enter a City Name"
    value={input}
    onChange={(e)=>setinput(e.target.value)}
    onKeyPress={search}
    />
   </div>
  )
}

export default App;
