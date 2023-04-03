  import React from 'react'
  import { useState ,useEffect} from 'react'
  import './scoreCard.css'

  
  function CricketCard({name,id,matchType,date,status, }) {
  //   const [altergames ,setaltergames]= useState([])

  //   const getGames = async()=>{

  //     const api = `b68e7d18-f12a-4556-a40b-a1e5c380960e`;
  //     const url =`https://api.cricapi.com/v1/currentMatches?apikey=${api}`
  //    const response =  await fetch(url);
  //    const finalResponse= await response.json() 
  //    setaltergames((finalResponse.data));
   
  //  }
  // //  console.log(altergames)

 


    return (
      <section className='cardsection' >
     <div class="card">
  <h5 class="card-header">{matchType} <span className='date'>{date} </span></h5>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{status}</p>
      

    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>



      </section>
    )
  }
  
  export default CricketCard

