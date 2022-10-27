import React from 'react'
import { useState, useEffect } from 'react'
// import { getMatches } from './components/FectApi';

function App() {
  const [games, setgames] = useState([]);

  // fetching Api
  const getMa = async()=>{
    console.log("how are you")
  const URL ="https://api.cricapi.com/v1/matches?apikey=f8b6b587-779a-4293-9f48-d8507f1c09c8"
    const response = await fetch(URL);
   setgames( await response.json());
    // console.log(data);
    
  }
useEffect(() => {
 getMa();

}, [])


  return (
   <>
   <h1>My First Cric Project</h1>
   </>
  )
}

export default App