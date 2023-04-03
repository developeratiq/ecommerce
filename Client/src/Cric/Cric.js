import React from 'react'
import Card from './Card/Card'
import CricketCard from './Card/scorecard/CricketCard'
import './cric.css'
// import './Api/Api'

import { useEffect,useState } from 'react'
import { Api } from './Api/Api'
import Nav from './Nav/Nav'
import { stripBasename } from '@remix-run/router'

function Cric() {
  const [ALtnews , setALtnews] = useState([]);
  const [altgames ,setaltgames]= useState([])



 //fetching matches 
const getGames = async()=>{

   const api = `d3157052-44dc-4070-a592-6b08289c7357`;
   const url =`https://api.cricapi.com/v1/currentMatches?apikey=${api}`
  const response =  await fetch(url);
  const finalResponse= await response.json() 
  setaltgames((finalResponse.data));

}
console.log(altgames)


 // fetching all news 

   const Api = async() => {
    const Key = '8ab74e0b0a7e4034a0046c20b8221db0'
    const data =   await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${Key}`);
       const newsLists = await data.json();
      setALtnews((newsLists.articles));

       }
   useEffect(() => {
    Api();
     getGames();

   }, [])
   



  return (<>
       <Nav></Nav>
    <h1 className='main_heading'>All Matches</h1>
    <hr />
      {
         altgames&&altgames.map((cb)=>{

            return(
               <>
               
                <section className='cardsection' >
     <div class="card">
  <h5 class="card-header">{cb.matchType}<span className='date'>{cb.date} </span></h5>
     {(cb.matchEnded===true )?(<button className='statusButton'>Completed</button>):(<button className='live'>Live🟢</button>)}

  <div class="card-body">
    <h5 class="card-title">{cb.name}  </h5>
    <p class="card-text complete"> {cb.status}</p>
    {
      cb.score &&cb.score.map((sc)=>{
         return(
            <>
            <h5 class="card-title">  {sc.inning}: &nbsp; &nbsp;{sc.r}/{sc.w}  : &nbsp; {sc.o}-Overs  </h5>
            </>
         )
      })
    }
    
  </div>
</div>



      </section>

                  {/* {

                     cb.score&&cb.score.map((sc)=>{
                        return(
                           <>
                            <h1>cb heer</h1>
                           
                           
                           </>
                        )
                     })
                  } */}


               </>
            )
         })

      }  
         
    
    </>
  )
}

export default Cric