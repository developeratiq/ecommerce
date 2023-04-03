import React from 'react'
import Card from './Card/Card'
import Cric from './Cric'
import Nav from './Nav/Nav'
import { Route, Routes} from 'react-router-dom';
import Upcoming from './Card/scorecard/Upcoming';
import News from './Card/News';

function Allcomp() {
  return (
    <div>
     <Routes>

     <Route path='/' element = {<Cric></Cric>}> </Route>
   <Route path='/upcoming' element = {<Upcoming></Upcoming>}> </Route>
   <Route path='/news' element = {<News></News>}> </Route>
  
    


    </Routes>





     



    </div>
  )
}

export default Allcomp